var languages = {
  en: {
    interface: {
      "app-name": "Spider Solitaire",
      toolbar: {
        "new-game": "New Game",
        "different-game": "Change Difficulty",
        undo: "Undo",
        rules: "How to play",
        about: "About",
        moves: "Moves: __moves__",
        score: "Score: __score__",
        scoreboard: "Scoreboard",
        hint: "Hint",
        timer: "__time__",
        sendfeedback: "Send feedback",
        gamenumber: "Game #__gamenumber__",
        "load-game": "Load Game",
        "restart-game": "Restart this game"
      },
      games: {
        "one-suit": {
          name: "One Suit",
          addendum: "Easy",
          description:
            "One suit Spider is an easy game for beginners &amp; casual players."
        },
        "two-suit": {
          name: "Two Suits",
          addendum: "Reasonable",
          description:
            "Add another suit to your solitaire game for an extra challenge."
        },
        "four-suit": {
          name: "Four Suits",
          addendum: "Challenging",
          description: "Four suit Spider is the trickiest version of the game."
        }
      },
      gameover: {
        "no-moves": "No moves left.",
        won: "You aced it!",
        items: {
          "new-game": {
            name: "Play Another",
            description: "Play another Spider game in this style."
          },
          "different-game": {
            name: "Something Different",
            description: "Pick another game style to play."
          }
        }
      },
      loadgame: {
        "load-game": "Load a Game",
        "load-game-description":
          "Enter a game number below to load the corresponding game.",
        "load-game-error":
          "Enter a number between 0-1000000, or start a new game from the menu.",
        verb: "Load Game",
        "game-id": "Game #"
      },
      badges: {
        "winningstreak-small": "Neat, you scored __val__ wins in a row.",
        "winningstreak-large":
          "Outstanding! You have won __val__ games in a row.",
        "winningstreak-enormous":
          "Congratulations! You've acheived __val__ wins in a row!",
        "improved-time":
          "You finished in __val__ seconds, improving your average .",
        "best-moves": "You finished in __val__ moves, beating your record!"
      },
      scoreboard: {
        scoreboard: "Scoreboard",
        total: "Total games",
        "longest-streak": "Longest streak",
        won: "Won",
        lost: "Lost",
        "winning-streak": "Current winning streak",
        "losing-streak": "Current losing streak",
        "games-played": "Games played",
        "percentage-won": "Percent Won",
        stats: "Game Statistics",
        "average-time": "Average time"
      }
    },
    about:
      '<div class="center">\n\t<h2>Spider Solitaire</h2>\n\t<p>By <a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about">Space Kid Games</a></p>\n\t<a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about"><img class="sk-logo" src="img/space-kid-logo.png" alt="~" /></a>\n\t<ul class="center">\n\t\t<li><a href="https://chrome.google.com/webstore/detail/spider-solitaire/bcopgabdbdohekgeabpbfhledmdahkpe">Chrome Web Store</a></li>\n\t\t<li><a href="https://chrome.google.com/webstore/support/bcopgabdbdohekgeabpbfhledmdahkpe">Help &amp; Support</a></li>\n\t\t<li><a href="http://twitter.com/spacekidgames">Follow on Twitter</a></li>\n\t</ul>\n</div>\n<p>The Spider Solitaire you know and love. With three difficulty levels, you\'ll never tire of this classic.</p>\n\n<p>Spider Solitaire &copy; 2012 Ash Kyd. All Rights Reserved. Builds on the work of others, including:</p>\n<ul>\n\t<li>jQuery &copy; 2012 jQuery Foundation and other contributors.</li>\n\t<li>Backbone.js &copy; 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>Underscore.js &copy; 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>i18next &copy; 2012 Jan Mühlemann (jamuhl).</li>\n\t<li>Mousetrap &copy; 2012 Craig Campbell.</li>\n\t<li>Portions of this application include artwork by <a href="https://twitter.com/AndyFitz">Andy Fitzsimon</a> and <a href="http://byronknoll.com/">Byron Knoll</a>.</li>\n\t<li>Translations thanks to Matthew Crossley &amp; Pierre-Elliot Lucas.</li>\n</ul>\n<p>Special thanks go to everyone who helped with testing &amp; feedback during development.</p>\n',
    rules:
      '<h2>How to play Spider Solitaire</h2>\n<p>The purpose of the game is to remove all cards from the table.</p>\n\n<p>To win, you must build columns or cards organised in descending order, from King to Ace, which can then be moved off the table to the empty foundation at the top of the screen.</p>\n\n<img src="img/rules-gameboard.png" alt="" width="100%"/>\n\n<p>In the example game above, you can see the deck in the top left, the empty foundation in the top right, and the tableau of cards at the bottom.</p>\n\n<p>Each column of cards in the tableau must be organised numerically, and should be a single suit. You can mix suits in a column, however you may only move multiple cards in the same suit at a time.</p>\n\n<p>Once you have run out of moves on the table, click the deck in the top-right to deal another ten cards. You can deal a total of five times before the deck is exhausted, after which you must complete the game or start again.</p>\n\n\n\n<h2>Movement</h2>\n<p>You can move cards by dragging, or by clicking the card you wish to move and then clicking the spot you want to move it to.</p>\n<p>If a card can not be moved, it will fly back to its original position, and any card you clicked will become highlighted in place of the previous one.</p>\n\n<h2>Game Modes</h2>\n<p>You can play three different styles of Spider Solitaire:\n</p>\n<dl>\n<dt>One Suit</dt>\n<dd>Single suit uses only one suit, which makes it easier to build columns because all the same suit may stack.</dd>\n<dt>Two Suits</dt>\n<dd>Two suits throws in an extra suit which lends a degree more difficulty. Though different suit colours can stack, you can’t move columns of different suits which can become difficult.</dd>\n<dt>Four Suits</dt>\n<dd>Four suits is the most difficult version of Spider Solitaire because there are fewer cards to build columns.</dd>\n</dl>\n\n<p>This version of Spider Solitaire is known as “Relaxed Spider” because you do not need to have a card in each column before dealing. Future versions will make this an option.</p>\n\n<h2>Get Started</h2>\n<p>To start a new game, click the menu icon at the top of the screen and click either "New Game" to jump right in, or "Different Game" to choose the game type.</p>\n'
  },
  es: {
    interface: {
      "app-name": "Solitario Spider",
      toolbar: {
        "new-game": "Juego nuevo",
        "different-game": "Seleccionar en juego",
        undo: "Atrás",
        rules: "Aprende a jugar",
        about: "Acerca de",
        moves: "Movimientos: __moves__",
        score: "Resultado: __score__",
        scoreboard: "Scoreboard",
        hint: "Indicio",
        timer: "__time__",
        sendfeedback: "Danos tu opinión",
        "restart-game": "Reinicie este juego",
        gamenumber: "Juego #__gamenumber__",
        "load-game": "Cargar partida"
      },
      games: {
        "one-suit": {
          name: "Un Traje",
          addendum: "Fácil",
          description:
            "Una araña traje es un juego fácil para los principiantes y jugadores casuales."
        },
        "two-suit": {
          name: "Dos Trajes",
          addendum: "Medio",
          description:
            "Añadir otro traje en tu juego de solitario para un desafío."
        },
        "four-suit": {
          name: "Cuatro Trajes",
          addendum: "Desafiante",
          description: "Cuatro araña traje es la versión más difícil del juego."
        }
      },
      gameover: {
        "no-moves": "No se puede seguir adelante.",
        won: "Felicitaciones, haz completado!",
        items: {
          "new-game": {
            name: "Nuevo Juego",
            description: "Jugar a otro juego de este estilo."
          },
          "different-game": {
            name: "Juego Diferentes",
            description: "Elija otro estilo de juego para jugar."
          }
        }
      },
      loadgame: {
        "load-game": "Cargar un juego",
        "load-game-description":
          "Introduzca un número de juego para cargar el juego correspondiente.",
        "load-game-error":
          "Introduzca un número entre 0-1000000, o iniciar un nuevo juego en el menú.",
        verb: "Cargar partida",
        "game-id": "Juego #"
      },
      badges: {
        "winningstreak-small": "Su puntaje __val_ victorias consecutivas.",
        "winningstreak-large": "Su puntaje __val_ victorias consecutivas.",
        "winningstreak-enormous": "Su puntaje __val_ victorias consecutivas.",
        "improved-time":
          "You finished in __val__ seconds, improving your average.",
        "best-moves":
          "¿Ha terminado en __val__1 movimientos, superando su récord"
      },
      scoreboard: {
        scoreboard: "Marcador",
        total: "Número total de juegos",
        "longest-streak": "Más victorias consecutivas",
        won: "Won",
        lost: "Perdido",
        "winning-streak": "Victorias consecutivas actuales",
        "losing-streak": "`Pérdidas consecutivas actuales",
        "games-played": "Partidos jugados",
        "percentage-won": "Porcentaje ganó",
        stats: "Game Statistics",
        "average-time": "El tiempo medio"
      }
    },
    about:
      '<div class="center">\n\t<h2>Spider Solitaire</h2>\n\t<p>Por <a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about">Space Kid Games</a></p>\n\t<a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about"><img class="sk-logo" src="img/space-kid-logo.png" alt="~" /></a>\n\t<ul class="center">\n\t\t<li><a href="https://chrome.google.com/webstore/detail/spider-solitaire/bcopgabdbdohekgeabpbfhledmdahkpe">Chrome Web Store</a></li>\n\t\t<li><a href="https://chrome.google.com/webstore/support/bcopgabdbdohekgeabpbfhledmdahkpe">Ayuda y Comentarios</a></li>\n\t\t<li><a href="http://twitter.com/spacekidgames">Siguenos en Twitter</a></li>\n\t</ul>\n</div>\n<p>El Solitario Spider usted conoce y ama. Con tres niveles de dificultad, nunca se cansará de este clásico.</p>\n\n<p>Gracias por jugar! Si usted puede sugerir mejoras a la traducción al español, \n <a href="https://chrome.google.com/webstore/support/bcopgabdbdohekgeabpbfhledmdahkpe">por favor deje un comentario</a>.</p>\n\n<p>Solitario Spider &copy; 2012 Ash Kyd. Todos los Derechos Reservados. Se basa en el trabajo de otros, incluyendo:</p>\n<ul>\n\t<li>jQuery &copy; 2012 jQuery Foundation and other contributors.</li>\n\t<li>Backbone.js &copy; 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>Underscore.js &copy; 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>i18next &copy; 2012 Jan Mühlemann (jamuhl).</li>\n\t<li>Mousetrap &copy; 2012 Craig Campbell.</li>\n\t<li>Algunas partes de esta aplicación son obras de arte de <a href="https://twitter.com/AndyFitz">Andy Fitzsimon</a> y <a href="http://byronknoll.com/">Byron Knoll</a>.</li>\n</ul>\n',
    rules:
      '<h2>Cómo jugar Solitairo Spider</h2>\n<p>El propósito del juego es eliminar todas las cartas de la mesa.</p>\n\n<p>Para ganar, debes construir columnas o tarjetas organizados en orden descendente, del rey al as, que luego se puede mover fuera de la mesa a la base vacía en la parte superior de la pantalla.</p>\n\n<img src="img/rules-gameboard.png" alt="" width="100%"/>\n\n<p>En el ejemplo anterior se puede ver la cubierta en la parte superior izquierda, la base en la parte superior derecha, y la tabla en la parte inferior.</p>\n\n<p>Cada columna de las tarjetas deben ser organizados numéricamente, y debe ser un solo juego. Usted puede mezclar trajes en una columna, sin embargo sólo se puede mover varias tarjetas del mismo palo a la vez.</p>\n\n<p>Una vez que se han quedado sin movimientos en la tabla, haga clic en la cubierta en la parte superior derecha para hacer frente a otros diez cartas. Usted puede hacer frente a un total de cinco veces antes de que la cubierta se ha agotado, después de lo cual usted debe completar el juego o empezar de nuevo.</p>\n\n<h2>Movimiento</h2>\n\n<p>Puede mover las cartas arrastrando o haciendo clic en la tarjeta que desea mover y luego haga clic en el punto que desee mover.</p>\n\n<p>Si una tarjeta no se puede mover, volará de nuevo a su posición original, y cualquier carta que ha hecho clic se convertirá en relieve en lugar de la anterior.</p>\n\n<h2>Modos de juego</h2>\n\n<p>Usted puede jugar tres estilos diferentes de solitario spider:</p>\n\n<dl>\n<dt>Uun traje</dt>\n<dd>Solo juego utiliza un solo juego, que hace que sea más fácil de construir columnas porque todos del mismo palo puede apilar.</dd>\n<dt>Dos trajes</dt>\n<p>Dos trajes de lanza en un juego extra que le da un grado de dificultad mayor. Aunque diferentes colores traje puede apilar, no se pueden mover las columnas de trajes diferentes, que pueden llegar a ser difícil.</p>\n<dt>Cuatro trajes</dt>\n<p>Cuatro palos es la versión más difícil del solitario spider porque hay menos cartas para construir las columnas.</p>\n<p>Esta versión de Spider Solitaire es conocido como "araña relajado", ya que no es necesario tener una tarjeta en cada columna antes de abordar. Las versiones futuras harán de esta una opción.</p>\n\n<h2>Iniciar un juego</h2>\n<p>Para iniciar un nuevo juego, haga clic en el icono de menú en la parte superior de la pantalla y haga clic en "Juego nuevo" o "Seleccionar en juego" para elegir el tipo de juego.</p>\n'
  },
  fr: {
    interface: {
      "app-name": "Spider Solitaire",
      toolbar: {
        "new-game": "Nouvelle Partie",
        "different-game": "Modifier la Difficulté",
        undo: "Annuler",
        rules: "Comment Jouer",
        about: "A propos",
        moves: "Nombre d'actions: __moves__",
        score: "Score: __score__",
        scoreboard: "Scoreboard",
        hint: "Indice",
        timer: "__time__",
        sendfeedback: "Envoyer un commentaire",
        gamenumber: "Jeu #__gamenumber__",
        "load-game": "Jeu de charge",
        "restart-game": "Redémarrez ce jeu"
      },
      games: {
        "one-suit": {
          name: "Une Couleur",
          addendum: "Faible",
          description:
            "Une partie de Spider avec une seule Couleur est de faible difficulté, adapté aux joueurs débutants."
        },
        "two-suit": {
          name: "Deux Couleurs",
          addendum: "Moyenne",
          description:
            "Ajoute une deuxième couleur a votre partie pour un défi supplémentaire."
        },
        "four-suit": {
          name: "Quatre Couleurs",
          addendum: "Elevée",
          description:
            "Le Spider Solitaire avec quatre Couleurs est la version la plus difficile."
        }
      },
      gameover: {
        "no-moves": "Plus d'actions possible.",
        won: "Vous avez Gagné!",
        items: {
          "new-game": {
            name: "Rejouer",
            description: "Rejouer une partie de Spider avec les même paramètres"
          },
          "different-game": {
            name: "Partie Différente",
            description: "Choisissez un autre style de jeu."
          }
        }
      },
      loadgame: {
        "load-game": "Charger une partie",
        "load-game-description":
          "Enter a game number to load the corresponding game.",
        "load-game-error":
          "Entrez un nombre entre 0-1000000, ou de commencer un nouveau jeu dans le menu.",
        verb: "Jeu de charge",
        "game-id": "Jeu #"
      },
      badges: {
        "winningstreak-small": "Vous avez obtenu __val__ victoires d'affilée!",
        "winningstreak-large": "Vous avez obtenu __val__ victoires d'affilée!",
        "winningstreak-enormous":
          "Vous avez obtenu __val__ victoires d'affilée!",
        "improved-time":
          "Vous avez terminé en __val__ secondes, battant le temps moyen.",
        "best-moves":
          "Vous avez terminé en __val__ coups, en battant votre dossier!"
      },
      scoreboard: {
        scoreboard: "Tableau de bord",
        total: "Nombre total de jeux",
        "longest-streak": "Plus grand nombre de victoires consécutives",
        won: "Gagne",
        lost: "Perdu",
        "winning-streak": "Le nombre actuel de victoires consécutives",
        "losing-streak": "Le nombre actuel de pertes consécutives",
        "games-played": "Nombre de parties jouées",
        "percentage-won": "Pour cent de parties gagnées",
        stats: "Statistiques de jeu",
        "average-time": "Le délai moyen"
      }
    },
    about:
      '<div class="center">\n\t<h2>Spider Solitaire</h2>\n\t<p>By <a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about">Space Kid Games</a></p>\n\t<a href="http://spider-solitaire.ash.ms/?utm_source=spider-solitaire&utm_medium=app&utm_campaign=about"><img class="sk-logo" src="img/space-kid-logo.png" alt="~" /></a>\n\t<ul class="center">\n\t\t<li><a href="https://chrome.google.com/webstore/detail/spider-solitaire/bcopgabdbdohekgeabpbfhledmdahkpe">Chrome Web Store</a></li>\n\t\t<li><a href="https://chrome.google.com/webstore/support/bcopgabdbdohekgeabpbfhledmdahkpe">Obtenir de l\'aide</a></li>\n\t\t<li><a href="http://twitter.com/spacekidgames">Twitter</a></li>\n\t</ul>\n</div>\n<p>Spider Solitaire &copy; 2012 Ash Kyd. All Rights Reserved. Builds on the work of others, including:</p>\n<ul>\n\t<li>jQuery &copy; 2012 jQuery Foundation and other contributors.</li>\n\t<li>Backbone.js &copy; 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>Underscore.js &copy; 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.</li>\n\t<li>i18next &copy; 2012 Jan Mühlemann (jamuhl).</li>\n\t<li>Mousetrap &copy; 2012 Craig Campbell.</li>\n\t<li>Portions of this application include artwork by <a href="https://twitter.com/AndyFitz">Andy Fitzsimon</a> and <a href="http://byronknoll.com/">Byron Knoll</a>.</li>\n\t<li>Translations thanks to Matthew Crossley &amp; Elliot Lucas.</li>\n</ul>\n'
  }
};
