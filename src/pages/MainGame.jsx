import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Player from '../components/Player/Player';
import GameBackground from '../components/GameBackground/GameBackground';
import StageMarker from '../components/StageMarker/StageMarker';
import ContentModal from '../components/Modals/ContentModal';
import { useKeyboardControls, useStageProximity } from '../hooks/useGameControls';
import { mapStages } from '../data/projectsData';
import styles from './MainGame.module.css';

const MainGame = ({ onBack }) => {
    const [playerPosition, setPlayerPosition] = useState(5);
    const [activeStage, setActiveStage] = useState(null);
    const [movingRight, setMovingRight] = useState(false);
    const [movingLeft, setMovingLeft] = useState(false);

    const animationRef = useRef(null);
    const lastMoveTimeRef = useRef(0);

    // Quanto maior o intervalo, mais lento o movimento
    const MOVE_INTERVAL = 50;

    // Controles de teclado
    const { moveLeft, moveRight } = useKeyboardControls(playerPosition, setPlayerPosition, {
        step: 1.5,
        minPosition: 0,
        maxPosition: 100,
    });

    // Botões de navegação reutilizáveis
    const navigationButtons = useMemo(
        () => ({
            moveLeft,
            moveRight,
        }),
        [moveLeft, moveRight]
    );

    // Movimento contínuo para mouse/touch
    useEffect(() => {
        const loop = (timestamp) => {
            if (timestamp - lastMoveTimeRef.current >= MOVE_INTERVAL) {
                if (movingRight) {
                    navigationButtons.moveRight();
                }

                if (movingLeft) {
                    navigationButtons.moveLeft();
                }

                lastMoveTimeRef.current = timestamp;
            }

            animationRef.current = requestAnimationFrame(loop);
        };

        animationRef.current = requestAnimationFrame(loop);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [movingRight, movingLeft, navigationButtons]);

    const startMovingRight = useCallback(() => {
        setMovingLeft(false);
        setMovingRight(true);
    }, []);

    const stopMovingRight = useCallback(() => {
        setMovingRight(false);
    }, []);

    const startMovingLeft = useCallback(() => {
        setMovingRight(false);
        setMovingLeft(true);
    }, []);

    const stopMovingLeft = useCallback(() => {
        setMovingLeft(false);
    }, []);

    const stopAllMovement = useCallback(() => {
        setMovingLeft(false);
        setMovingRight(false);
    }, []);

    // Detecção de proximidade com stages
    const nearbyStages = useStageProximity(playerPosition, mapStages);
    const canInteract = nearbyStages.length > 20;

    // Estado visual do player
    const isMoving = movingLeft || movingRight;

    // Gerenciar interação com stages
    const handleStageInteract = useCallback((stageId) => {
        const stage = mapStages.find((s) => s.id === stageId);
        if (stage) {
            setActiveStage(stage);
            stopAllMovement();
        }
    }, [stopAllMovement]);

    const handleCloseModal = useCallback(() => {
        setActiveStage(null);
    }, []);

    // Controle de teclado para interação
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' && canInteract && activeStage === null && nearbyStages.length > 0) {
                e.preventDefault();
                handleStageInteract(nearbyStages[0].id);
            } else if (e.key === 'Escape' && activeStage !== null) {
                e.preventDefault();
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [canInteract, activeStage, nearbyStages, handleStageInteract, handleCloseModal]);

    return (
        <div className={styles.gameContainer}>
            <GameBackground playerPosition={playerPosition} />

            <div className={styles.gameStage}>
                <Player position={playerPosition} isWalking={isMoving} />

                <div className={styles.stagesContainer}>
                    {mapStages.map((stage) => (
                        <StageMarker
                            key={stage.id}
                            stage={stage}
                            playerPosition={playerPosition}
                            isNearby={nearbyStages.some((s) => s.id === stage.id)}
                            onInteract={handleStageInteract}
                        />
                    ))}
                </div>

                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${playerPosition}%` }}
                    />
                </div>
            </div>

            <div className={styles.mobileControls}>
                <button
                    className={styles.controlButton}
                    onPointerDown={startMovingLeft}
                    onPointerUp={stopMovingLeft}
                    onPointerLeave={stopMovingLeft}
                    onPointerCancel={stopMovingLeft}
                >
                    ◀ Esquerda
                </button>

                {canInteract && activeStage === null && (
                    <button
                        className={`${styles.controlButton} ${styles.interactButton}`}
                        onClick={() => handleStageInteract(nearbyStages[0].id)}
                    >
                        ⬆ Interagir
                    </button>
                )}

                <button
                    {...playerPosition === 100 ? setPlayerPosition(5) : ""}
                    className={styles.controlButton}
                    onPointerDown={startMovingRight}
                    onPointerUp={stopMovingRight}
                    onPointerLeave={stopMovingRight}
                    onPointerCancel={stopMovingRight}
                >
                    Direita ▶
                </button>
            </div>

            <button className={styles.backButton} onClick={onBack}>
                ↩ Menu
            </button>

            <div className={styles.controlsHint}>
                <p>Use ← → ou pressione os botões para se mover</p>
            </div>

            {
                activeStage && (
                    <ContentModal
                        stage={activeStage}
                        onClose={handleCloseModal}
                    />
                )
            }

            {
                canInteract && activeStage === null && (
                    <div className={styles.proximityHint}>
                        Pressione ESPAÇO ou clique para interagir!
                    </div>
                )
            }
        </div >
    );
};

export default MainGame;