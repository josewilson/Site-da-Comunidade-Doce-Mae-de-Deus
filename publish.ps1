param(
  [string]$Remote = "https://github.com/josewilson/Site-da-Comunidade-Doce-Mae-de-Deus.git"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Write-Host "Publicando repositório a partir de" (Resolve-Path .) -ForegroundColor Cyan

try {
  git --version | Out-Null
} catch {
  Write-Error "Git não encontrado. Instale o Git for Windows e tente novamente: https://git-scm.com/download/win"
  exit 1
}

# Verifica nome/e-mail
$uName = (git config user.name) 2>$null
$uEmail = (git config user.email) 2>$null
if (-not $uName -or -not $uEmail) {
  Write-Error "Configure seu usuário global antes: `n  git config --global user.name \"Seu Nome\" `n  git config --global user.email \"seu-email@exemplo.com\""
  exit 1
}

git config --global init.defaultBranch main | Out-Null

if (-not (Test-Path .git)) {
  Write-Host "Inicializando repositório..."
  git init | Out-Null
}

Write-Host "Adicionando arquivos..."
git add .

Write-Host "Fazendo commit inicial..."
git commit -m "chore: inicializa projeto + melhorias de performance" --allow-empty

Write-Host "Definindo branch principal..."
git branch -M main

$hasOrigin = (git remote) -match '^origin$'
if (-not $hasOrigin) {
  Write-Host "Configurando remoto origin: $Remote"
  git remote add origin $Remote
} else {
  Write-Host "Atualizando remoto origin: $Remote"
  git remote set-url origin $Remote
}

Write-Host "Enviando para GitHub..."
git push -u origin main

Write-Host "Publicação concluída com sucesso!" -ForegroundColor Green

