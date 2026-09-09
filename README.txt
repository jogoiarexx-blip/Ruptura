RUPTURA v0.4.0

- NPCs do Hub agora usam sprites próprios em pixel art.
- Adicionado centro operacional visual no meio do Hub com mesa tática/holográfica.
- Quadro de Caçadas agora tem sprite próprio e presença física melhor no Hub.
- Modais principais do Hub agora exibem retratos para Ares, Mira, Doran, Lyra, Kael, Nox, Selene e Darius.
- Spawn do jogador no Hub levemente reajustado.
- Save: ruptura-save-v040 com migração automática da v0.3.9.

RUPTURA v0.3.9

- Organizados NPCs do Hub com melhor alinhamento no chão.
- Reduzida a sobreposição da UI do Hub: badges de Poção e Sombras movidos para a área superior.
- Melhorada a área central operacional com painéis/seções mais legíveis.
- Spawn do jogador no Hub ajustado para não ficar tão embaixo da HUD de skills.
- Save: ruptura-save-v039 com migração automática da v0.3.8.

RUPTURA v0.3.8

- Portais recortados novamente a partir de um atlas melhor.
- Corrigido o corte ruim dos sprites dos portais.
- Ajustado o posicionamento da área de portais no Hub.
- Labels dos portais agora têm placa escura para melhorar leitura.
- Reduzido o escurecimento pesado da faixa inferior do Hub.
- Save: ruptura-save-v038 com migração automática da v0.3.7.

RUPTURA v0.3.7

- Imagens do jogo otimizadas em WEBP.
- Sprites, bosses, portais, NPCs e background do menu migrados para WEBP.
- Ícones PWA mantidos em PNG para compatibilidade com instalação no celular.
- Service Worker, cache offline e referências de assets atualizados.
- Save: ruptura-save-v037 com migração automática da v0.3.6.

RUPTURA v0.3.6

- Hub reorganizado para o background atual.
- Serviços/NPCs ficaram à esquerda e centro.
- Portais ganharam área exclusiva à direita em duas linhas.
- Varek ganhou posição própria.
- Save: ruptura-save-v036 com migração automática da v0.3.5.

RUPTURA v0.3.5

- Sprites próprios dos sete portais aplicados ao Hub.
- Cada portal possui 4 frames separados e animação individual.
- Portais bloqueados ficam visualmente escurecidos e mais lentos.
- PWA/offline atualizado para cachear todos os sprites novos.
- Save: ruptura-save-v035 com migração automática da v0.3.4.

RUPTURA v0.3.4

- Background panorâmico aplicado ao Hub rolável.
- Imagem otimizada para 1760×720 em WebP.
- NPCs e portais continuam interativos e são desenhados sobre o cenário.
- O cenário recebe escurecimento leve para os portais jogáveis se destacarem.
- Save: ruptura-save-v034 com migração automática da v0.3.3.

RUPTURA v0.3.3

- Agente Tático: novo sprite aplicado e otimizado quadro a quadro.
- Próximo foco visual: background do Hub/área de portais e NPCs.

RUPTURA v0.3.2

- Sprite do Varek aplicado ao jogo.
- Varek agora usa frames próprios no Hub quando sua presença é ativada pela história.
- Retrato próprio do Varek adicionado à transmissão/serviço.
- Assets novos: assets/npcs/varek/idle/0..3.png e assets/npcs/varek/portrait.png.
- Save: ruptura-save-v032 com migração automática da v0.3.1.

RUPTURA v0.3.1

- Background ilustrado aplicado ao menu principal.
- Adicionada escolha de gráficos: AUTO, BAIXO, MÉDIO e ALTO.
- O preset altera quantidade de partículas, motes e intensidade de efeitos/vinheta.
- PWA offline atualizado para incluir o novo asset do menu.
- Save: ruptura-save-v031 com migração automática da v0.3.0.

RUPTURA v0.3.0

- Offline ampliado: Service Worker pré-cacheia player, inimigos, bosses, ícones e todas as fases.
- Cache versionado e limpeza automática de versões antigas.
- Status do cache offline mostrado no menu/PWA.
- Save: ruptura-save-v030 com migração automática da v0.2.9.

RUPTURA v0.2.9

- Ícone oficial do jogo adicionado ao projeto.
- PWA/instalação no celular adicionada com manifest, service worker e botão de instalar.
- O jogo agora pode ser instalado em navegadores compatíveis no celular e abrir em modo standalone.
- Save: ruptura-save-v029 com migração automática da v0.2.8.

RUPTURA v0.2.8

- Novo sprite do Brute aplicado ao jogo em frames separados.
- Os frames do Brute foram recortados individualmente e salvos sem o texto da sheet.
- Save: ruptura-save-v028 com migração automática da v0.2.7.

RUPTURA v0.2.7

- Brute recebeu sprite próprio novo em 6 frames e foi aplicado ao game.
- Menu principal recebeu fundo animado e visual mais forte, separado da cidade/hub.
- Save: ruptura-save-v027 com migração automática da v0.2.6.

RUPTURA v0.2.6

- Crawler recebeu sprite próprio aplicado ao game.
- Menu principal não renderiza mais a cidade/Hub ao fundo.
- Save: ruptura-save-v026 com migração da v0.2.5.

RUPTURA v0.2.2

- Novo sprite do jogador aplicado ao game.
- Atlas em assets/player/hunter_atlas.png.
- Animações usadas: idle, caminhada, ataque, dash, postura de guarda e queda.
- Mantido fallback procedural caso o arquivo falhe.

RUPTURA v0.2.1 CORRIGIDA

CORREÇÃO DO FLUXO PÓS-BOSS:
- relatório não abre automaticamente após matar o boss;
- Vestígio de Chefe permanece até você tentar extrair ou sair;
- saída ENCERRAR INCURSÃO aparece na arena;
- em Raid, o próximo boss só inicia após você escolher CONTINUAR RAID;
- Portal Duplo continua opcional;
- save permanece v0.2.1.

RUPTURA v0.2.1

- Corrigido menu principal com fundo congelado.
- Hub agora é maior que a tela e rola horizontalmente.
- Relatório da incursão ficou mais compacto e com scroll.
- Nova missão narrativa jogável: Caçada Interna.
- Sistema de notoriedade/procurado.
- Varek aparece no Hub e nas cutscenes.
- Novos agentes humanos.

RUPTURA v0.2.0


================

ATUALIZAÇÃO PRINCIPAL
Sistema profissional de carregamento/descarregamento de Rupturas com foco em celular.

ARQUITETURA
CORE (permanece carregado)
- index.html
- css/style.css
- js/main.js
- js/core/level-loader.js
- loop principal / canvas
- jogador
- HUD
- controles teclado/touch
- inventário, atributos, skills, Ecos, contratos, crafting e save
- áudio procedural compartilhado

LEVEL ASSETS (somente a Ruptura atual)
- fases/cinza/level.js + rooms.js
- fases/azul/level.js + rooms.js
- fases/violeta/level.js + rooms.js
- fases/esmeralda/level.js + rooms.js
- fases/vermelho/level.js + rooms.js

FLUXO
Hub -> preparação -> Save -> Loading real -> validação -> Dungeon
Fim/morte/menu -> Save -> cleanup -> unload da fase -> Hub/Menu

LOADING REAL
A porcentagem é calculada pelo número de recursos de fase que realmente dispararam onload.
Cada dungeon atual possui 2 arquivos exclusivos reais (level.js e rooms.js), resultando em progresso por recursos concluídos.
O sistema já aceita adicionar mais assets por fase no futuro.

TRATAMENTO DE ERRO
- timeout de 8 segundos por recurso
- 1 nova tentativa automática
- identificação do arquivo no console
- tela amigável de erro
- botão TENTAR NOVAMENTE
- não fica travado eternamente em 99%

CLEANUP
- cancela timeouts de spawn e boss pertencentes à fase
- limpa intervals/listeners registrados no LevelRuntime
- limpa inimigos, projéteis, partículas, drops, baús, Ecos ativos, armadilhas e boss
- encerra música ativa
- remove tags <script> da fase
- apaga a configuração da fase do registro em memória
- mantém somente CORE e recursos compartilhados

SAVE
Novo save: ruptura-save-v013
Migração preservada de ruptura-save-v011 e todas as chaves anteriores já suportadas.
O save é gravado antes de iniciar uma nova Ruptura e nos fluxos de saída relevantes.

OFFLINE
A versão anterior não possuía Service Worker/PWA. Portanto nenhum Service Worker foi removido ou alterado.
O loader usa scripts clássicos relativos, sem fetch/import dinâmico, preservando a arquitetura compatível com abertura local em navegadores que permitem file:// local.

PRELOAD
Não foi ativado preload antecipado de outras Rupturas nesta versão. Como o jogador escolhe livremente o portal e o foco é celular/memória, carregar antecipadamente uma dungeon incerta iria contra o objetivo principal.

TESTES AUTOMATIZADOS
- sintaxe de main.js
- sintaxe do LevelManager/AssetManager/LoadingScreen
- sintaxe dos 10 arquivos de fase
- registro de cada fase isoladamente
- quantidade de salas por fase
- simulação de unload sem deixar fase anterior registrada
- migração do save v0.1.1 -> v0.1.5 presente
- verificação de que dados completos das fases não permanecem no main.js
- verificação do padrão de um único loop requestAnimationFrame global

Checkpoint: não existe sistema de checkpoint na v0.1.1 original, portanto esse caso de teste não se aplica sem criar uma mecânica nova fora do escopo do loader.


NOVO v0.1.5
- Portal Dourado Rank A carregado sob demanda em fases/dourado/.
- Reputacao da Associacao e dialogo com Ares.
- Quadro de cacadas persistente.
- Penalidade de morte: parte do ouro e dos itens obtidos na incursao fica em risco.
- Novos inimigos Rank A e boss Arconte Celestial.


v0.1.5: Guilda, recrutamento, expedições, dificuldades de incursão e Ruptura Rank S com raid de 3 bosses. A fase Rank S usa o LevelManager sob demanda.


NOVO v0.1.5 — SOMBRAS DA RUPTURA
- R: invoca/recolhe os Ecos equipados como Sombras durante a dungeon.
- T: alterna ordens ASSALTO / GUARDA / CAÇA.
- Invocação consome MP real e respeita o limite de slots de Ecos.
- ASSALTO aumenta o dano das Sombras.
- GUARDA reduz parte do dano recebido pelo Caçador enquanto as Sombras estiverem ativas.
- CAÇA acelera ataques e habilidades das Sombras.
- No celular há um botão lunar dedicado à invocação.


NOVO v0.1.6 — SOMBRAS AVANÇADAS
- Inimigos derrotados deixam um Vestígio Sombrio por alguns segundos.
- E próximo ao vestígio tenta extração direta.
- Sombras passam a ter HP próprio e podem ser atacadas.
- F marca um alvo prioritário para o exército.
- Y usa CHAMADO DA LEGIÃO: invoca até 8 Sombras por 12s, 55 MP, 35s de recarga.
- Controles mobile F/Y adicionados.
- Save v016 migra automaticamente do v015.


NOVO v0.1.7 — LEGIAO SOMBRIA
- Inimigos extraidos possuem grau SOLDADO/CAVALEIRO/ELITE/GENERAL.
- Bosses derrotados deixam Vestigio de Chefe com 10% de chance de extracao.
- Sombras de chefe nascem LENDARIAS e grau GENERAL.
- Sombra Favorita: +8% de poder.
- Comandante da Legiao: +12% proprio e aura +10% enquanto equipado.
- H alterna formacao CUNHA/MURALHA/CIRCULO.
- U ativa Suprema Exercito da Ruptura: ate 12 Sombras, 16s, 80 MP.
- A extracao ganhou efeito visual de silhueta se levantando do vestigio.
- Controles mobile U/H adicionados.
- Save v017 migra automaticamente do v016.


V0.1.8 — CAMPANHA
- História em capítulos e missão principal.
- J abre História/Capítulos.
- Escolhas de diálogo persistentes.
- Cutscene inicial e desbloqueios de capítulos por progressão.
- Cena especial na primeira extração bem-sucedida de uma Sombra de chefe.
- Save v018 com migração da v017.


V0.1.9 — CAMPANHA EXPANDIDA
- Rival Darius no Hub e relação persistente.
- Escolhas da voz agora dão bônus reais.
- Operação Eclipse: missão principal carregada sob demanda fora do catálogo de portais comuns.
- Primeira traição: Supervisor Varek.
- Cutscenes antes e depois de bosses narrativos.

NOVO v0.2.0: duelo com Darius, escolha de lado, Operação Fantasma, Varek antagonista ativo, perseguição narrativa e caminhos de final.
