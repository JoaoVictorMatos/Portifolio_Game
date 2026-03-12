import { useCallback, useEffect } from "react";

/**
 * Hook para controlar o movimento do personagem com teclado
 * @param {number} currentPosition - Posição atual (0-100)
 * @param {function} setPosition - Função para atualizar posição
 * @param {object} options - Opções de configuração
 */
export const useKeyboardControls = (
  currentPosition,
  setPosition,
  options = {},
) => {
  const { step = 2, minPosition = 0, maxPosition = 100 } = options;

  const moveLeft = useCallback(() => {
    setPosition((prev) => Math.max(prev - step, minPosition));
  }, [setPosition, step, minPosition]);

  const moveRight = useCallback(() => {
    setPosition((prev) => Math.min(prev + step, maxPosition));
  }, [setPosition, step, maxPosition]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveLeft();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        moveRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveLeft, moveRight]);

  return { moveLeft, moveRight };
};

/**
 * Hook para detectar proximidade com stages
 * @param {number} playerPosition - Posição do personagem (0-100)
 * @param {array} stages - Array de stages com posição
 * @param {number} threshold - Distância para considerar "perto"
 */
export const useStageProximity = (playerPosition, stages, threshold = 10) => {
  return stages.filter(
    (stage) => Math.abs(stage.position - playerPosition) <= threshold,
  );
};

/**
 * Hook para gerenciar animação de camera parallax
 */
export const useParallax = (playerPosition) => {
  return {
    offset: playerPosition * 0.5,
  };
};
