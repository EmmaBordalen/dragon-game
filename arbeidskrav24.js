//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på. :-)
      //Stats for heroes: Du må ikke bruke alle stats videre i programmet ditt hvis du ikke ser det nødvendig.
      //Husk at for å hente ut noe fra et objekt som er i et array kan vi skrive for eksempel slik: heroesArray[1].name (Ariana Archer)

      let heroesArray = [
        {
          id: 0,
          name: "Henriette Healer",
          maxHP: 400,
          currentHP: 400,
          damage: 100,
          alive: true,
        },
        {
          id: 1,
          name: "Ariana archer",
          maxHP: 600,
          currentHP: 600,
          damage: 400,
          alive: true,
        },
        {
          id: 2,
          name: "Wyona Warrior",
          maxHP: 800,
          currentHP: 800,
          damage: 400,
          alive: true,
        },
      ];

        let dragonStats = {
        name: "Daar Dragon",
        maxHP: 2000,
        currentHP: 2000,
        damage: 200,
        alive: true,
      };

      //Bildene som skal kunne trykkes på
      const healer = document.getElementById("healer");
      const archer = document.getElementById("archer");
      const warrior = document.getElementById("warrior");

      const dragon = document.getElementById("dragon");

      //Navnene til heltene og dragen som kan oppdateres med riktig navn (tilleggsfunksjonalitet)
      const healerName = document.getElementById("healer-name-txt");
      const archerName = document.getElementById("archer-name-txt");
      const warriorName = document.getElementById("warrior-name-txt");

      const dragonName = document.getElementById("dragon-name-txt");

      //HP-tekstene til heltene som skal kunne oppdatere seg (tilleggsfunksjonalitet)
      const healerHealthTxt = document.getElementById("healer-health-txt");
      const archerHealthTxt = document.getElementById("archer-health-txt");
      const warriorHealthTxt = document.getElementById("warrior-health-txt");

      //HP-teksten til dragen som kan oppdatere seg (tilleggsfunksjonalitet)
      const dragonHealthTxt = document.getElementById("dragon-health-txt");

      //Healthbars som må oppdateres for at grønnfargen skal bli mindre når HP blir mindre (tilleggsfunksjonalitet)
      const healerHealthBar = document.getElementById("healer-health");
      const archerHealthBar = document.getElementById("archer-health");
      const warriorHealthBar = document.getElementById("warrior-health");

      const dragonHealthBar = document.getElementById("dragon-health");

      //Her kommer din kode! :o

      //Oppgave 1 påkrevd
      //Funksjon som lager angrepene til heltene når man klikker på de
      healer.onclick = myHealerDamage

      function myHealerDamage(){
          alert(heroesArray[0].name+" har gjort "+heroesArray[0].damage+" skade på "+dragonStats.name+"!");
          dragonStats.currentHP -= heroesArray[0].damage;
          if (dragonStats.currentHP <= 0) {
              dragonStats.currentHP = 0;
          }
          dragonHealthTxt.innerHTML = `${dragonStats.currentHP} / ${dragonStats.maxHP} HP`

          dragonAttack();
          gameOver();
      }

      archer.onclick = myArcherDamage

      function myArcherDamage(){
          alert(heroesArray[1].name+" har gjort "+heroesArray[1].damage+" skade på "+dragonStats.name+"!");
          dragonStats.currentHP -= heroesArray[1].damage;
          if (dragonStats.currentHP <= 0) {
              dragonStats.currentHP = 0;
          }
          dragonHealthTxt.innerHTML = `${dragonStats.currentHP} / ${dragonStats.maxHP} HP`
          dragonAttack();
          gameOver();
      }

      warrior.onclick = myWarriorDamage
            
      function myWarriorDamage(){
          alert(heroesArray[2].name+" har gjort "+heroesArray[2].damage+" skade på "+dragonStats.name+"!")
          dragonStats.currentHP -= heroesArray[2].damage;
          if (dragonStats.currentHP < 0) {
              dragonStats.currentHP = 0;
          }
          dragonHealthTxt.innerHTML = `${dragonStats.currentHP} / ${dragonStats.maxHP} HP`
          dragonAttack();
          gameOver();
      }

      //Oppgave 2 påkrevd

      //Lager en funksjon for å få dragen til å angripe en tilfeldig helt med Math.floor og Math.random
      function dragonAttack() {
        //Gjør at dragen kan kun angripe helter som forsatt har health
        let attackedHeroRandom;
        do {
            attackedHeroRandom = Math.floor(Math.random()* heroesArray.length)
        } while (heroesArray[attackedHeroRandom].alive === false);
        let attackedHero = heroesArray[attackedHeroRandom];
        let dragonAttackDamage = dragonStats.damage;    

      attackedHero.currentHP -= dragonAttackDamage;
      if (attackedHero.currentHP < 0) attackedHero.currentHP = 0;

      alert(`${dragonStats.name} har angrepet ${attackedHero.name}!`);
      dragonBarUpdate();

     
      let healthTxtElement;
      
      //Switch-casen samler vi alle heltene sine healthTxt, oppdaterer HealthBar og fjerner helten fra spillet når de får 0 HP
      switch (attackedHeroRandom) {
        case 0:
          healthTxtElement = healerHealthTxt;
          healerHealthBar.style.width = `${(heroesArray[0].currentHP / 400) * 300}px`;
          if(heroesArray[0].currentHP <= 0) {
            heroesArray[0].alive = false
            healer.remove();
        }
          break;

        case 1:
          healthTxtElement = archerHealthTxt;
          archerHealthBar.style.width = `${(heroesArray[1].currentHP / 600) * 300}px`;
          if(heroesArray[1].currentHP <= 0) {
            heroesArray[1].alive = false
            archer.remove();
        }
          break;

        case 2:
          healthTxtElement = warriorHealthTxt;
          warriorHealthBar.style.width = `${(heroesArray[2].currentHP / 800) * 300}px`;
          if(heroesArray[2].currentHP <= 0) {
            heroesArray[2].alive = false
            warrior.remove();
        }
          break;

         
      }

      //healthTxtElement referer til switch-casen for å vise skadene dragen har gjort på heltene
      healthTxtElement.innerHTML = `${attackedHero.currentHP} / ${attackedHero.maxHP} HP`;
      gameWon();
     }


      //Oppgave 3 påkrevd
      //Funksjon som viser at du har tapt spillet
      function gameOver() {
        if (heroesArray[0].currentHP <= 0 && heroesArray[1].currentHP <= 0 && heroesArray[2].currentHP <= 0 && dragonStats.currentHP > 0) {
            alert("Spillet er tapt! " + dragonStats.name + " har vunnet!");
        }
     }

      //Oppgave 4 påkrevd
      //Funksjon som viser at du har vunnet spillet
      function gameWon() {
        if (dragonStats.currentHP === 0) {
          alert("Gratulerer, du har vunnet spillet!");
          //Fjerner dragen om hp-en er 0 og du vinner spillet
          dragon.remove();
         }
      }

      //Oppgave 1 tilleggsfunksjonalitet
        //Denne ligger som en del av "oppgave 2 påkrevd" og "oppgave 4 påkrevd"

      //Oppgave 3 tilleggsfunksjonalitet
      //For å endre navnene til karakterene
      healerName.innerHTML = heroesArray[0].name;
      archerName.innerHTML = heroesArray[1].name;
      warriorName.innerHTML = heroesArray[2].name;
      dragonName.innerHTML = dragonStats.name;

      //Oppgave 4 tilleggsfunksjonalitet
       //Endrer størrelsen på health-baren til heltene, ligger som en del av "oppgave 2 påkrevd"

       //Funksjonen for at health baren til dragen skal oppdatere seg
       function dragonBarUpdate() {
        dragonHealthBar.style.width= `${(Math.floor((dragonStats.currentHP/dragonStats.maxHP)*100))}%`;
       }
