#!/bin/bash

# Script de configuração automática para o portfólio

echo "🎮 Iniciando configuração do Portfólio..."
echo ""

# Verifica se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Please install Node.js 16+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node -v)"
echo "✅ npm encontrado: $(npm -v)"
echo ""

# Instala dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
    echo "🚀 Iniciando servidor de desenvolvimento..."
    npm run dev
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi
