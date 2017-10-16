// Initialize App
window.onload = function() {
(function () {
'use strict';

document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
// Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
document.addEventListener( 'pause', onPause.bind( this ), false );
document.addEventListener( 'resume', onResume.bind( this ), false );
        
// TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
var parentElement = document.getElementById('deviceready');
//var listeningElement = parentElement.querySelector('.listening');
//var receivedElement = parentElement.querySelector('.received');
//listeningElement.setAttribute('style', 'display:none;');
//receivedElement.setAttribute('style', 'display:block;');
}

function onPause() {
// TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
}

function onResume() {
// TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
}
})();

var
team = 0,
active = true,
selfview = true;

var vals = [{
    n: 'Hollow Mask', v: '25', t: '2 turns'
}];

var states = [[{
    n: 'Hollow Mask', p: 'Effect: Ichigo permanently gains ' + vals[0].v + ' destructible defense. For ' + vals[0].t + ' stuns are being ignored, "Black Getsuga Tensho" will have no cooldown and also reduces spiritual damage taken by 50% for 1 turn.'
}]];

    var teams = [
        [[{
            n: 'Ascended Aizen', p: 'Aizen has reached an ascended form which is beyond both Soul Reapers and Hollows. His movements are nearly impossible to read as his speed and perception of any situation is extremely dangerous.', c: 'a_aizen',
            s1: ['Flashstep Massacre', 'Aizen deals 15 piercing physical damage to one enemy and heals 5 health. This skill cannot be countered. During "Absolute Hypnosis" this skill will also ignore invulnerability.', '1', 'phy', ['hak', 'hak', 'rnd'], '0', 'e'],
            s2: ['Absolute Hypnosis', 'For 3 turns Aizen will reflect the first skill used on him each turn. After this skill ends Aizen will become invulnerable for 1 turn. Hogyoku Fusion is unavilable meanwhile. (This skill is invisible)', '6', 'act', ['hak', 'hak', 'zan', 'rnd', 'rnd'], '0', 's'],
            s3: ['Hogyoku Fusion', 'For 2 turns Aizen will ignore all stuns and gains 1 random energy each turn. After this skill ends Aizen will deal 20 spiritual damage to all enemies. (This skill is invisible)', '4', 'spi', ['zan', 'zan', 'rnd', 'rnd'], '0', 's'],
            s4: ['Perfect Block', 'For 1 turn Aizen will counter the next skill used on him and deals 15 piercing damage to the target that used the skill on him. For 1 turn "Flashstep Massacre" will deal 5 additional damage. (This skill is invisible)', '3', 'act', ['hak', 'zan', 'zan'], '0', 's']
        }],

        [{
            n: 'Hollow Ichigo', p: 'Ichigo became a raging beast in order to protect Orihime Inoue. His powers are tremendously high and his rage could even cause damage to someone that is important to him.', c: 'h_ichigo',
            s1: ['Rageful Swing', 'Ichigo deals 20 piercing physical damage to one enemy and marks them with "Hunt You Down" for 2 turns.', '1', 'phy', ['zan', 'zan', 'rnd'], '0', 'e'],
            s2: ['Overwhelming Rage Cero', 'Ichigo Deals 30 piercing spiritual damage to one enemy and stuns them for 1 turn. "Rageful Swing" will heal Ichigo for 10 health for 1 turn.', '4', 'spi', ['rei', 'rei', 'rei', 'rnd'], '0', 'e'],
            s3: ['Hunt You Down', 'For 4 turns your team will ignore all energy altering effects and heal 5 health each turn. During this time using "Rageful Swing" on any marked enemy will reduce the cooldown of "Overhwelming Rage Cero" by 1 turn.', '6', 'act', ['zan', 'zan', 'zan', 'rnd', 'rnd'], '1', 's'],
            s4: ['Rage Guard', 'For 2 turns Ichigo will counter all skills used on him. After this skill ends Ichigo will receive 10 affliction damage. (This skill is invisible)', '4', 'act', ['zan', 'rei', 'rnd'], '0', 's']
        }],

        [{
            n: 'Kidou Urahara', p: 'Urahara has undergone secret training and has raised his spiritual pressure by a huge amount. His abilities have a very intelligent formation of tactics behind them.', c: 'k_urahara',
            s1: ['Bind, Benihime', 'Urahara stuns one enemy for 1 turn. For 1 turn "Sealing Technique" can be used on that target and Urahara ignores all stuns meanwhile.', '1', 'act', ['rei', 'kid'], '0', 'e'],
            s2: ['Soul Slaying Punishment', 'Urahara will permanently mark one enemy. If this target uses a skill it will be dealt 25 piercing spiritual damage, Urahara will steal 1 random energy and the mark will be consumed. (This skill is invisible)', '2', 'spi', ['kid', 'kid', 'rei', 'rnd'], '0', 'e'],
            s3: ['Sealing Technique', 'Urahara deals 10 damage spiritual to all enemies and stuns the primary target for 1 turn. Also 1 energy will be removed from the target.', '1', 'spi', ['rei', 'rei', 'rnd'], '1', 'e'],
            s4: ['Reiatsu Negation', 'For 1 turn Urahara will mark all enemies. If any enemy uses a spiritual skill during this time it will be reflected back to them. (This skill is invisible)', '2', 'str', ['kid', 'kid'], '1', 'e']
        }]],

        [[{
            n: 'Resurreccion Starrk', p: 'Starrk underwent the resurreccion state merging together as one with Lillinette. His speed increased by a huge amount and he got 2 spiritual guns shooting out cero waves with highly penetrating force.', c: 'r_starrk',
            s1: ['Lightswords', 'Starrk deals 15 physical damage to one enemy. Each time this skill is used on the same enemy it will deal 5 additional damage to that enemy.', '0', 'phy', ['kid', 'rnd', 'rnd'], '0', 'e'],
            s2: ['Cero Metralletta', 'Starrk deals 5 spiritual damage to all enemies for 3 turns. During "Los Lobos" this skill will also make Starrk invulnerable to all enemy strategic and action skills.', '3', 'spi', ['rei', 'rei'], '1', 'b'],
            s3: ['Los Lobos', 'For 3 turns "Lightswords" will mark its target dealing 10 additional spiritual damage. After this skill ends all enemies receive 5 spiritual damage for each "Lightswords" used during this skill.', '5', 'spi', ['kid', 'kid', 'kid', 'rnd'], '2', 'b'],
            s4: ['Cero Wall', 'For 1 turn Starrk will ignore all received physical damage. During "Los Lobos" this skill will have 1 cooldown less and costs 1 energy less. (This skill is invisible)', '2', 'str', ['rei', 'rnd', 'rnd'], '0', 's']

        }],

        [{
            n: 'Resurreccion Barragan', p: 'Barragan in his resurreccion state became the "King of Hueco Mundo". He resembles death itself just as his attacks cause dreadful wounds. Death given by him may be unavoidable if his enemy is not extremely skilled.', c: 'r_barragan',
            s1: ['Respira', 'For 3 turns Barragan will deal 5 affliction damage for 2 turns to any enemy using a skill on him. If Barragan dies during this skill then all enemies will by stunned for 1 turn.', '4', 'aff', ['zan', 'zan', 'rnd'], '0', 's'],
            s2: ['Death Smoke', 'Barragan deals 15 affliction damage to all enemies. Each enemy affected by "Respira" will also lose 1 random energy upon taking damage by this skill.', '2', 'aff', ['zan', 'rnd', 'rnd'], '1', 'e'],
            s3: ['Gran Caida', 'Barragan stuns one enemy for 2 turns and applies "Respira" on all enemies. During this effect "Death Smoke" will instead steal energy instead of removing it.', '4', 'act', ['zan', 'zan', 'zan', 'rnd'], '2', 'e'],
            s4: ['Death Aura', 'Barragan gains 20 destructible defense and for 2 turns Barragan will counter the first physical skill used on him. (This skill is invisible)', '4', 'str', ['zan', 'rnd', 'rnd'], '0', 's']

        }],

        [{
            n: 'Segunda Ulquiorra', p: 'Ulquiorra released himself a second time revealing his "Segunda Etapa" form. Its power is tremendously destructible and his regeneration speed has increased drastically.', c: 's_ulquiorra',
            s1: ['Lanza Del Rerampago', 'Ulquiorra deals 25 spiritual damage to one enemy and also disables healing effects on its target for 1 turn.', '1', 'spi', ['rei', 'rei', 'rnd'], '0', 'e'],
            s2: ['Cero Oscuras', 'Ulquiorra deals 20 spiritual damage to one enemy. This skill ignores invulnerability. During "Enhanced Regeneration" this skill also removes 2 random energy.', '2', 'spi', ['rei', 'rei', 'rnd'], '0', 'e'],
            s3: ['Enhanced Regeneration', 'Ulquiorra heals 5 health for 4 turns. Each time Ulquiorra uses a skill, he will heal 5 health instantly. "Lanza Del Rerampago" also has no cooldown meanwhile.', '6', 'act', ['rei', 'rnd', 'rnd', 'rnd'], '0', 's'],
            s4: ['Reishi Wing Guard', 'For 1 turn Ulquiorra counters the next spiritual skill used on him and the enemy will lose random energy equal to the cost of the skill that has been countered. (This skill is invisible)', '3', 'str', ['hak', 'rnd', 'rnd'], '0', 's']
        }]],

        [[{
            n: 'Bankai Ichigo', p: 'Ichigo finally reached his bankai form after dealing with devestating training offered by Yoruichi. Ichigo is now faster and stronger than ever.', c: 'b_ichigo',
            s1: ['Flashstep Barrage', 'Ichigo deals 10 physical damage each turn for 2 turns to one enemy and takes 50% physical damage less meanwhile. "Black Getsuga Annihilation" and "Hollow Mask" got 1 turn cooldown less during this skill.', '2', 'phy', ['hak', 'hak', 'rnd'], '0', 'e'],
            s2: ['Black Getsuga Tensho', 'Ichigo deals 15 spiritual damage to one enemy. During "Hollow Mask" spiritual damage taken will be reduced by 50% for 1 turn.', '1', 'spi', ['rei', 'rnd'], '0', 'e'],
            s3: ['Black Getsuga Annihilation', 'Ichigo deals 20 spiritual damage to all enemies and the primary target will be stunned for 1 turn. Enables "Hollow Mask" for 2 turns.', '3', 'spi', ['rei', 'rei', 'zan', 'rnd'], '2', 'e'],
            s4: ['Hollow Mask', 'Ichigo permanently gains 25 destructible defense. For 2 turns stuns are being ignored and "Black Getsuga Tensho" will have no cooldown.', '4', 'act', ['zan', 'rnd', 'rnd'], '0', 's']

        }],

        [{
            n: 'Bankai Hitsugaya', p: 'Hitsugaya in his strongest state, exposing ice wings becoming dangerous as his attacks can freeze inbetween a wide range.', c: 'b_hitsugaya',
            s1: ['Ice Flowers', 'Hitsugaya deals 5 physical damage to all enemies for 3 turns. During this skill "Ice Puppet" and "Frozen Wings" will have 1 cooldown less.', '3', 'phy', ['kid', 'rnd', 'rnd'], '0', 'e'],
            s2: ['Ice Puppet', 'The next skill used on Hitsugaya will have no effect. The enemy that triggered this skill will have its cooldowns doubled. (This skill is invisible)', '4', 'str', ['kid', 'zan', 'rnd'], '0', 's'],
            s3: ['Frozen Heaven', 'For 4 turns Hitsugaya will deal 5 additional damage and his skills cost one random reiatsu less. All enemy skills cost an additional random reiatsu meanwhile.', '6', 'act', ['kid', 'kid', 'zan', 'zan'], '2', 'b'],
            s4: ['Frozen Wings', 'Hitsugaya gains 5 destructible defense each turn for 4 turns. Each time Hitsugaya is attacked during this effect, the attacker will receive 5 physical damage and has their cooldowns increased by 1 turn.', '6', 'act', ['kid', 'kid', 'rnd', 'rnd'], '0', 's']
        }],

        [{
            n: 'Bankai Gin', p: 'Gin exposes himself being a very dangerous enemy. His attacks are swift and vital to be hit from at any moment. Not to mention up to which range his sword can extend.', c: 'b_gin',
            s1: ['Highspeed Distanciation', 'Gin becomes invulnerable for 1 turn and ignores enemy damage reduction meanwhile.', '2', 'act', ['hak', 'rnd'], '0', 's'],
            s2: ['Extend, Shinsou', 'Gin deals 20 physical damage to one enemy. This skill ignores invulnerability.', '2', 'phy', ['hak', 'rnd'], '0', 'e'],
            s3: ['Pierce, Shinsou', 'Gin deals 10 physical damage to all enemies and enables "Kill, Shinsou" for 1 turn. This skill deals 5 additional damage during "Highspeed Distanciation".', '2', 'phy', ['zan', 'zan'], '2', 'b'],
            s4: ['Kill, Shinsou', 'Gin permanently deals 5 affliction damage to one enemy each turn. This effect permanently deals 5 additional damage to that target each time "Extend, Shinsou" is used on that target.', '5', 'aff', ['hak', 'hak', 'zan', 'zan'], '0', 'e']
        }]]
    ];

loadplayer();
timer(120);

function loadplayer() {
master = document.getElementById('master'),
player = document.getElementById('player'),
playerbtn = document.getElementById('playerbtn'),
playername = document.getElementById('playername'),
slot1 = document.getElementById('slot1'),
slot2 = document.getElementById('slot2'),
slot3 = document.getElementById('slot3'),
char1 = document.getElementById('char1'),
char2 = document.getElementById('char2'),
char3 = document.getElementById('char3'),
c1_skill1 = document.getElementById('c1_skill1'),
c1_skill2 = document.getElementById('c1_skill2'),
c1_skill3 = document.getElementById('c1_skill3'),
c1_skill4 = document.getElementById('c1_skill4'),
c2_skill1 = document.getElementById('c2_skill1'),
c2_skill2 = document.getElementById('c2_skill2'),
c2_skill3 = document.getElementById('c2_skill3'),
c2_skill4 = document.getElementById('c2_skill4'),
c3_skill1 = document.getElementById('c3_skill1'),
c3_skill2 = document.getElementById('c3_skill2'),
c3_skill3 = document.getElementById('c3_skill3'),
c3_skill4 = document.getElementById('c3_skill4'),
hpstat1 = document.getElementById('hpstat1'),
hpstat2 = document.getElementById('hpstat2'),
hpstat3 = document.getElementById('hpstat3'),
infohead = document.getElementById('infohead'),
infobtn = document.getElementById('infobtn'),
infotxt = document.getElementById('infotxt'),
infocost = document.getElementById('infocost'),
infotype = document.getElementById('infotype'),
infocd = document.getElementById('infocd'),
turn = document.getElementById('turn'),
turnmask = document.getElementById('turnmask'),
turnbtn = document.getElementById('turnbtn'),
view = [infohead, infobtn, infotxt, infocost, infotype, infocd];
playerbtn.addEventListener('click', changeplayer);

    if (selfview === true) {
        team = 0;
        playername.textContent = 'Liam Scholtz';
        playername.style.textShadow = '0 0 8px blue';
        document.getElementById('playerenergy1').style.textShadow = '0 0 8px blue';
        document.getElementById('playerenergy2').style.textShadow = '0 0 8px blue';
        document.getElementById('playerenergy3').style.textShadow = '0 0 8px blue';
        document.getElementById('playerenergy4').style.textShadow = '0 0 8px blue';
    } else {
        team = 1;
        playername.textContent = 'Gegner';
        playername.style.textShadow = '0 0 8px red';
        document.getElementById('playerenergy1').style.textShadow = '0 0 8px red';
        document.getElementById('playerenergy2').style.textShadow = '0 0 8px red';
        document.getElementById('playerenergy3').style.textShadow = '0 0 8px red';
        document.getElementById('playerenergy4').style.textShadow = '0 0 8px red';
    }

    var chars = [char1, char2, char3];
    for (i = 0; i < 3; i++) {
        chars[i].value = i;
        chars[i].addEventListener('click', viewchar);
        chars[i].addEventListener('blur', rechar);
        chars[i].style.background = `url("images/chars/${teams[team][i][0]['c']}/char.jpg")`;
    }

    var skills = [[c1_skill1, c1_skill2, c1_skill3, c1_skill4], [c2_skill1, c2_skill2, c2_skill3, c2_skill4], [c3_skill1, c3_skill2, c3_skill3, c3_skill4]];
    for (i = 0; i < 4; i++) {
        skills[0][i].value = 0;
        skills[0][i].addEventListener('click', viewskill);
        skills[0][i].addEventListener('blur', reskill);
        skills[0][i].style.background = `url("images/chars/${teams[team][0][0]['c']}/skill_${i}.jpg")`;
        skills[0][i].name = 's' + (i + 1);

        skills[1][i].value = 1;
        skills[1][i].addEventListener('click', viewskill);
        skills[1][i].addEventListener('blur', reskill);
        skills[1][i].style.background = `url("images/chars/${teams[team][1][0]['c']}/skill_${i}.jpg")`;
        skills[1][i].name = 's' + (i + 1);

        skills[2][i].value = 2;
        skills[2][i].addEventListener('click', viewskill);
        skills[2][i].addEventListener('blur', reskill);
        skills[2][i].style.background = `url("images/chars/${teams[team][2][0]['c']}/skill_${i}.jpg")`;
        skills[2][i].name = 's' + (i + 1);
    }
}

function changeplayer() {
if (selfview === true) { selfview = false; } else { selfview = true; }
player.style.animation = 'nextplayer 0.5s ease forwards';
loadplayer();
}

    function gochar() {
        this.addEventListener('click', usechar);
    }

    function goskill() {
        this.addEventListener('click', useskill);
    }

    function rechar() {
        this.removeEventListener('click', usechar);
        this.addEventListener('click', viewchar);
    }

    function reskill() {
        this.removeEventListener('click', useskill);
        this.addEventListener('click', viewskill);
    }

    function usechar() {
        if (active === true && selfview === false) {
            //console.log(teams[team][this.value][0]['n']);
            document.getElementById('hpanim1').style.animation = 'hpdroptest 1s linear forwards';
            document.getElementById('hpval1').style.animation = 'hpdroptest 1s linear forwards';
            document.getElementById('hpstyle1').textContent = '50/100';
            //var audio = new Audio('sounds/click.mp3');
            //audio.play();
            char1.style.animation = null;
            char2.style.animation = null;
            char3.style.animation = null;
            this.blur();
            setTimeout(function () { master.style.background = 'transparent'; changeplayer(); this.addEventListener('click', viewchar); }, 2000);
        }
    }

    function viewchar() {
        while (infocost.firstChild) {
            infocost.removeChild(infocost.firstChild);
        }

        //this.removeEventListener('click', viewchar);
        //this.addEventListener('click', usechar);

        infotype.textContent = '';
        infocd.textContent = '';

        for (i = 0; i < view.length; i++) {
            view[i].classList.add('fadein');
        }

        infohead.textContent = teams[team][this.value][0]['n'];
        infotxt.textContent = teams[team][this.value][0]['p'];
        infobtn.classList.add('skill');
        infobtn.style.background = `url("images/chars/${teams[team][this.value][0]['c']}/chara.jpg")`;

        setTimeout(function () {
            for (i = 0; i < view.length; i++) {
                view[i].classList.remove('fadein');
            }
        }, 500);
    }

    function useskill() {
        //console.log(teams[team][this.value][0][this.name][0]);
        char1.removeEventListener('click', viewchar);
        char2.removeEventListener('click', viewchar);
        char3.removeEventListener('click', viewchar);
        char1.removeEventListener('blur', rechar);
        char2.removeEventListener('blur', rechar);
        char3.removeEventListener('blur', rechar);
        if (active === true && selfview === true) {
            switch (teams[team][this.value][0][this.name][6]) {
                case 's':
                    master.style.background = 'rgba(0 , 0, 0, 0.7)';
                    char1.style.animation = 'skill-to-char 0.5s ease infinite';
                    slot2.style.filter = 'brightness(50%)';
                    slot3.style.filter = 'brightness(50%)';
                    char1.addEventListener('click', gochar); break;

                case 'e':
                    this.blur();
                    changeplayer();
                    master.style.background = 'rgba(0 , 0, 0, 0.7)';
                    char1.style.animation = 'skill-to-char 0.5s ease infinite';
                    char2.style.animation = 'skill-to-char 0.5s ease infinite';
                    char3.style.animation = 'skill-to-char 0.5s ease infinite';
                    char1.addEventListener('click', gochar);
                    char2.addEventListener('click', gochar);
                    char3.addEventListener('click', gochar); break;
            }
        }
    }

    function viewskill() {
        while (infocost.firstChild) {
            infocost.removeChild(infocost.firstChild);
        }

        this.removeEventListener('click', viewskill);
        this.addEventListener('click', useskill);

        for (i = 0; i < view.length; i++) {
            view[i].classList.add('fadein');
        }

        infohead.textContent = teams[team][this.value][0][this.name][0];
        infotxt.textContent = teams[team][this.value][0][this.name][1];
        infobtn.classList.add('skill');
        infobtn.style.background = `url("images/chars/${teams[team][this.value][0]['c']}/skill_${(this.name.replace('s', '') - 1)}.jpg")`;

        var cost = teams[team][this.value][0][this.name][4];
        for (i = 0; i < cost.length; i++) {
            var infocostx = document.createElement('div');
            infocostx.id = 'infocost' + i;
            infocostx.classList.add('cost');
            infocost.appendChild(infocostx);

            switch (cost[i]) {
                case 'zan': infocostx.style.background = 'red'; break;
                case 'kid': infocostx.style.background = 'blue'; break;
                case 'rei': infocostx.style.background = 'yellow'; break;
                case 'hak': infocostx.style.background = 'white'; break;
                case 'rnd': infocostx.style.background = 'black'; break;
                case '': infocostx.style.background = 'transparent'; break;
                default: console.log('ERROR: 400 Bad Request!');
            }

            switch (teams[team][this.value][0][this.name][3]) {
                case 'phy': type = 'Physical'; break;
                case 'spi': type = 'Spiritual'; break;
                case 'aff': type = 'Affliction'; break;
                case 'act': type = 'Action'; break;
                case 'str': type = 'Strategic'; break;
                default: console.log('ERROR: 400 Bad Request!');
            }

            infotype.textContent = 'Type: ' + type + ' |';
            infocd.textContent = 'Cooldown: ' + teams[team][this.value][0][this.name][2];

            setTimeout(function () {
                for (i = 0; i < view.length; i++) {
                    view[i].classList.remove('fadein');
                }
            }, 500);
        }
    }

    function timer(dur) {
        var user = playername.textContent;
        turn.firstChild.textContent = user + ': ' + dur;

        if (active === true) {
            turnbtn.addEventListener('click', end);
            turn.style.background = 'linear-gradient(blue, black)';
            turn.style.animation = 'turn-1 1s ease infinite, timer ' + (dur + 2) + 's linear infinite';
            turnmask.style.background = 'linear-gradient(blue, black)';
            master.style.animation = 'player-1 1s ease infinite';
        } else {
            turnbtn.removeEventListener('click', end);
            turn.style.background = 'linear-gradient(red, black)';
            turn.style.animation = 'turn-2 1s ease infinite, timer ' + (dur + 2) + 's linear infinite';
            turnmask.style.background = 'linear-gradient(red, black)';
            master.style.animation = 'player-2 1s ease infinite';
        }

        var counter = setInterval(function () {
            if (dur < 0) {
                endturn(counter);
            } else {
                turn.firstChild.textContent = user + ': ' + dur;
                dur--;
            }
        }, 1000);

        function end() { endturn(counter); }
    }

    function endturn(x) {
        clearInterval(x);
        if (active === true) { active = false; } else { active = true; }
        console.log(playername.textContent + "'s turn ended!");
        turn.style.width = '100%';
        changeplayer();
        timer(120);
    }
}