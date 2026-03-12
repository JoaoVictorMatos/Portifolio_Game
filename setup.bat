@echo off
REM Script de configuração automática para o portfólio (Windows)

echo.
echo 🎮 Iniciando configuracao do Portifolio...
echo.

REM Verifica se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js nao encontrado. Por favor instale Node.js 16+ primeiro.
    echo Visite: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js encontrado
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo    Versao: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm encontrado: %NPM_VERSION%
echo.

REM Instala dependências
echo 📦 Instalando dependencias...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencias instaladas com sucesso!
    echo.
    echo 🚀 Iniciando servidor de desenvolvimento...
    echo.
    call npm run dev
) else (
    echo ❌ Erro ao instalar dependencias
    pause
    exit /b 1
)
