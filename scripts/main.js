// Initialize App
window.onload = function () {
    (function () {
        'use strict';

        document.addEventListener('deviceready', onDeviceReady.bind(this), false);

        function onDeviceReady() {
            // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
            document.addEventListener('pause', onPause.bind(this), false);
            document.addEventListener('resume', onResume.bind(this), false);

            // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
            var parentElement = document.getElementById('deviceready');
            //var listeningElement = parentElement.querySelector('.listening');
            //var receivedElement = parentElement.querySelector('.received');
            //listeningElement.setAttribute('style', 'display:none;');
            //receivedElement.setAttribute('style', 'display:block;');
            document.addEventListener("backbutton", onBackKeyDown);
        }

        function onPause() {
            // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
        }

        function onResume() {
            // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
        }
    })();

    // Init Vars
    var
        master = document.getElementById('master'),
        container = document.getElementById('container'),
        containernews = document.getElementById('containernew'),
        containernewsnext = document.getElementById('containernewnext'),
        profile = document.getElementById('profile'),
        friends = document.getElementById('friends'),
        team = document.getElementById('team'),
        missions = document.getElementById('missions'),
        battle = document.getElementById('battle'),
        search = false;

    // Init Funcs
    function onBackKeyDown() {
        alert('Back Button is Pressed!');
    }

    function goback() {
        document.body.style.pointerEvents = 'none';
        containernew.style.animation = 'containernewkill 0.5s ease forwards';
        container.style.animation = 'containerrecover 0.5s ease forwards';
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
            master.removeChild(containernew);
        }, 500);
    }

    function goback2() {
        document.body.style.pointerEvents = 'none';
        containernewnext.style.animation = 'containernewkill 0.5s ease forwards';
        containernew.style.animation = 'containerrecover 0.5s ease forwards';
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
            master.removeChild(containernewnext);
        }, 500);
    }

    function killblack() {
        search = false;
        document.body.style.pointerEvents = 'none';
        document.getElementById('jetblack').style.animation = 'jetblackkill 0.5s ease forwards';
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
            containernew.removeChild(document.getElementById('jetblack'));
        }, 500);
    }

    function killjetblack() {
        document.body.style.pointerEvents = 'none';
        document.getElementById('jetblack').style.animation = 'jetblackkill 0.5s ease forwards';
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
            containernewnext.removeChild(document.getElementById('jetblack'));
        }, 500);
    }

    function nextprofile() {
        var
            containernew = document.createElement('div'),
            pic = document.createElement('button'),
            user = document.createElement('h1'),
            rank = document.createElement('h1'),
            level = document.createElement('h1'),
            ladder = document.createElement('h1'),
            won = document.createElement('h1'),
            lost = document.createElement('h1'),
            streak = document.createElement('h1'),
            limit = document.createElement('h1'),
            gender = document.createElement('h1'),
            age = document.createElement('h1'),
            country = document.createElement('h1'),
            status = document.createElement('h1');
        user.appendChild(document.createTextNode(' User: \xa0\xa0\xa0\xa0\xa0\xa0 [GM] リアム'));
        rank.appendChild(document.createTextNode(' Rank: \xa0\xa0\xa0\xa0\xa0\xa0 Head Captain'));
        level.appendChild(document.createTextNode(' Level: \xa0\xa0\xa0\xa0\xa0\xa0 99'));
        ladder.appendChild(document.createTextNode(' Ladder: \xa0\xa0\xa0\xa0\xa0\xa0 #1'));
        won.appendChild(document.createTextNode(' Won: \xa0\xa0\xa0\xa0\xa0\xa0 0'));
        lost.appendChild(document.createTextNode(' Lost: \xa0\xa0\xa0\xa0\xa0\xa0 0'));
        streak.appendChild(document.createTextNode(' Streak: \xa0\xa0\xa0\xa0\xa0\xa0 +2'));
        limit.appendChild(document.createTextNode(' Limit: \xa0\xa0\xa0\xa0\xa0\xa0 +26'));
        gender.appendChild(document.createTextNode(' Gender: \xa0\xa0\xa0\xa0\xa0\xa0 Male'));
        age.appendChild(document.createTextNode(' Age: \xa0\xa0\xa0\xa0\xa0\xa0 21'));
        country.appendChild(document.createTextNode(' Country: \xa0\xa0\xa0\xa0\xa0\xa0 Germany'));
        status.appendChild(document.createTextNode(' Status: \xa0\xa0\xa0\xa0\xa0\xa0 Online'));
        returns = document.createElement('button');
        pic.id = 'prof';
        pic.style.background = 'url("images/chars/10_asc_aizen.jpg")';
        returns.id = 'returns';
        containernew.id = 'containernew';
        containernew.className = 'containernew';
        containernew.appendChild(pic);
        containernew.appendChild(user);
        containernew.appendChild(rank);
        containernew.appendChild(level);
        containernew.appendChild(ladder);
        containernew.appendChild(won);
        containernew.appendChild(lost);
        containernew.appendChild(streak);
        containernew.appendChild(limit);
        containernew.appendChild(gender);
        containernew.appendChild(age);
        containernew.appendChild(country);
        containernew.appendChild(status);
        containernew.appendChild(returns);
        returns.addEventListener('click', goback);
        master.appendChild(containernew);
        container.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function nextfriends() {
        var
            friendlist = [['Friend 1', '8_genryuusai'], ['Friend 2', '3_op_kisuke'], ['Friend 3', '1_ichigo'], ['Friend 4', '15_res_barragan'], ['Friend 5', '13_se_ulquiorra'], ['Friend 6', '17_wonderweiss']],
            containernew = document.createElement('div'),
            flist = document.createElement('div'),
            returns = document.createElement('button');
        returns.id = 'returns';
        flist.id = 'flist';
        containernew.id = 'containernew';
        containernew.className = 'containernew';

        for (var i = 0; i < friendlist.length; i++) {
            pic = document.createElement('button');
            user = document.createElement('h1');
            user.appendChild(document.createTextNode(friendlist[i][0]));
            pic.name = friendlist[i][0];
            pic.className = 'friend';
            pic.addEventListener('click', rdyfriends);
            pic.style.background = 'url("images/chars/' + friendlist[i][1] + '.jpg")';
            user.className = 'user';
            flist.appendChild(pic);
            flist.appendChild(user);
        }

        containernew.appendChild(returns);
        containernew.appendChild(flist);
        returns.addEventListener('click', goback);
        master.appendChild(containernew);
        container.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function rdyfriends() {
        console.log(this.name);
    }

    function nextteam() {
        var
            teamlist = ['18_v_ichigo', '2_f_uryuu', '3_op_kisuke'],
            ownedlist = ['1_ichigo', '2_f_uryuu', '3_op_kisuke', '', '5_shunsui', '', '7_b_hitsugaya', '', '', '', '', '12_res_grimmjow', '13_se_ulquiorra', '', '15_res_barragan', '', '', '18_v_ichigo'],
            charlist = ['1_ichigo', '2_f_uryuu', '3_op_kisuke', '4_yoruichi', '5_shunsui', '6_hmbyakuya', '7_b_hitsugaya', '8_genryuusai', '9_b_gin', '10_asc_aizen', '11_res_zayel', '12_res_grimmjow', '13_se_ulquiorra', '14_harribel', '15_res_barragan', '16_res_stark', '17_wonderweiss', '18_v_ichigo'],
            containernew = document.createElement('div'),
            chartxt = document.createElement('h1'),
            clist = document.createElement('div'),
            cteam = document.createElement('div'),
            chead = document.createElement('h1'),
            returns = document.createElement('button');
        returns.id = 'returns';
        clist.id = 'clist';
        clist.style.marginTop = '8%';
        containernew.id = 'containernew';
        containernew.className = 'containernew';
        chartxt.style.position = 'absolute';
        chartxt.style.textAlign = 'center';
        chartxt.style.marginTop = '1%';
        chartxt.style.zIndex = '99';
        chartxt.appendChild(document.createTextNode('Select Character'));
        chead.appendChild(document.createTextNode('Battle Team'));
        chead.style.textAlign = 'center';
        chead.style.marginTop = '8%';
        chead.style.background = 'rgba(0, 0, 0, 0)';
        cteam.appendChild(chead);
        cteam.style.height = '20%';
        cteam.style.marginTop = '-4%';
        cteam.style.background = 'rgba(0, 0, 0, 0.7)';
        containernew.appendChild(chartxt);

        for (var i = 0; i < charlist.length; i++) {
            pic = document.createElement('button');
            pic.name = charlist[i];
            pic.className = 'char';
            pic.addEventListener('click', rdyteam);
            pic.style.backgroundImage = 'url("images/chars/' + charlist[i] + '.jpg")';
            if (ownedlist[i] !== charlist[i]) { pic.style.filter = 'brightness(33%)'; }
            clist.appendChild(pic);
        }

        for (var i = 0; i < teamlist.length; i++) {
            pic = document.createElement('button');
            pic.className = 'char';
            pic.style.marginTop = '-1%';
            pic.style.backgroundImage = 'url("images/chars/' + teamlist[i] + '.jpg")';
            cteam.appendChild(pic);
        }

        containernew.appendChild(returns);
        containernew.appendChild(clist);
        containernew.appendChild(cteam);
        returns.addEventListener('click', goback);
        master.appendChild(containernew);
        container.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function rdyteam() {
        console.log(this.name);
    }

    function nextmissions() {
        var
            missionlist = [['Karakura Town', '1_karakura'], ['Soul Society', '2_society'], ['Court Lieutenants', '3_lieutenants'], ['Court Captains', '4_captains'], ['H.M. Arrancars', '5_arrancars'], ['H.M. Espada', '6_espada'], ['Bankai Captains', '7_bankai'], ['Released Espada', '8_released'], ['Vizard Training', '9_vizards'], ['Special Missions', '10_special']],
            containernew = document.createElement('div'),
            flist = document.createElement('div'),
            returns = document.createElement('button');
        returns.id = 'returns';
        flist.id = 'flist';
        containernew.id = 'containernew';
        containernew.className = 'containernew';

        for (var i = 0; i < missionlist.length; i++) {
            pic = document.createElement('button');
            user = document.createElement('h1');
            user.className = 'user';
            user.appendChild(document.createTextNode(missionlist[i][0]));
            pic.name = missionlist[i][0];
            pic.className = 'friend';
            pic.addEventListener('click', rdymissions);
            pic.style.background = 'url("images/missions/' + missionlist[i][1] + '.jpg")';
            flist.appendChild(pic);
            flist.appendChild(user);
        }

        containernew.appendChild(returns);
        containernew.appendChild(flist);
        returns.addEventListener('click', goback);
        master.appendChild(containernew);
        container.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function rdymissions() {
        var missionlist;
        switch (this.name) {
            case 'Karakura Town': missionlist = [['Ichigos Destiny', '1_ichigos_destiny', 'Defeat Ichigo: ', '0/3', 'Ichigo Kurosaki', '1_ichigo'], ['The Quincy God', '2_the_quincy_god', 'Defeat Ishida: ', '0/4', 'Uryuu Ishida', '2_f_uryuu'], ['Angler Hollow', '3_angler_hollow'], ['Vow Of Revenge', '4_vow_of_revenge'], ['The Exiled Eccentric', '5_the_exiled_eccentric'], ['A Quincy Genius', '6_a_quincy_genius'], ['Right Giant And Left Devil', '7_right_giant_and_left_devil'], ['Quincy Final Form', '8_quincy_final_form'], ['Hollow Control', '9_hollow_control'], ['A Blast From The Past', '10_a_blast_from_the_past']]; break;
            case 'Soul Society': missionlist = [['Shiba Clan', '1_the_shiba_clan'], ['Grudge Against Shinigami', '2_grudge_against_shinigami'], ['#1 Firworks Maker', '3_nr1_fireworks_maker'], ['7th Seat Wonder', '4_7th_seat_wonder'], ['The 11th Division', '5_the_11th_division'], ['Unparallelled beauty', '6_unparallelled_beauty'], ['A Fight To The Death', '7_a_fight_to_the_death'], ['Princess Of Ice', '8_princess_of_ice'], ['Young And Impressionable', '9_young_and_impressionable'], ['The Gatekeeper', '10_the_gatekeeper'], ['Swarmed By Shurikens', '11_swarmed_by_shurikens']]; break;
            case 'Court Lieutenants': ''; break;
            case 'Court Captains': ''; break;
            case 'H.M. Arrancars': ''; break;
            case 'H.M. Espada': ''; break;
            case 'Bankai Captains': ''; break;
            case 'Released Espada': ''; break;
            case 'Vizard Training': ''; break;
            case 'Special Missions': ''; break;
            default: alert('ERROR: 400 Bad Request');
        }

        containernewnext = document.createElement('div'),
        mlist = document.createElement('div'),
        returnss = document.createElement('button');
        returnss.id = 'returns';
        returnss.addEventListener('click', goback2);
        mlist.id = 'mlist';

        for (var i = 0; i < missionlist.length; i++) {
            pic = document.createElement('button');
            txt = document.createElement('h1');
            txt.appendChild(document.createTextNode(missionlist[i][0]));
            pic.className = 'mission';
            pic.value = missionlist[i][0] + ',' + missionlist[i][1] + ',' + missionlist[i][2] + ',' + missionlist[i][3] + ',' + missionlist[i][4] + ',' + missionlist[i][5];
            pic.addEventListener('click', viewmission);
            pic.style.background = 'url("images/missions/mission/' + this.name + '/' + missionlist[i][1] + '.jpg")';
            mlist.appendChild(txt);
            mlist.appendChild(pic);
        }

        containernewnext.id = 'containernewnext';
        containernewnext.className = 'containernewnext';
        containernewnext.appendChild(returnss);
        containernewnext.appendChild(mlist);
        master.appendChild(containernewnext);
        containernewnext.style.animation = 'containernewnext 0.5s ease forwards';
        containernew.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function viewmission() {
        var
        jetblack = document.createElement('div'),
        pic = document.createElement('img'),
        txt = document.createElement('h1'),
        req = document.createElement('h1'),
        end = document.createElement('h1'),
        char = document.createElement('h1'),
        gain = document.createElement('img'),
        returns = document.createElement('button');
        txt.appendChild(document.createTextNode(this.value.split(',')[0]));
        req.appendChild(document.createTextNode(this.value.split(',')[2] + this.value.split(',')[3]));
        end.appendChild(document.createTextNode('Reward: '));
        char.appendChild(document.createTextNode(this.value.split(',')[4]));
        req.style.marginTop = '10%';
        end.style.marginTop = '20%';
        gain.style.height = '75px';
        gain.style.width = '75px';
        gain.style.background = 'url("images/chars/' + this.value.split(',')[5] + '.jpg")';
        pic.className = 'mission';
        pic.style.background = this.style.background;
        returns.id = 'returns';
        returns.addEventListener('click', killjetblack);
        jetblack.id = 'jetblack';
        jetblack.appendChild(txt);
        jetblack.appendChild(pic);
        jetblack.appendChild(req);
        jetblack.appendChild(end);
        jetblack.appendChild(char);
        jetblack.appendChild(gain);
        jetblack.appendChild(returns);
        containernewnext.appendChild(jetblack);
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function nextbattle() {
        var
        battlemodes = ['Ranked Battle', 'Mission Battle', 'Training Battle', 'Private Battle'],
        containernew = document.createElement('div'),
        returns = document.createElement('button');
        returns.addEventListener('click', goback);
        returns.id = 'returns';
        containernew.id = 'containernew';
        containernew.className = 'containernew';

        for (var i = 0; i < battlemodes.length; i++) {
            txt = document.createTextNode(battlemodes[i]);
            btn = document.createElement('button');
            btn.name = battlemodes[i];
            btn.className = 'battle';
            btn.addEventListener('click', findbattle);
            btn.appendChild(txt);
            containernew.appendChild(btn);
        }

        containernew.appendChild(returns);
        master.appendChild(containernew);
        container.style.animation = 'containerkill 0.5s ease forwards';
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);
    }

    function findbattle() {
        var
        val = '0',
        jetblack = document.createElement('div'),
        txt = document.createElement('h1'),
        img = document.createElement('button'),
        find = document.createElement('h1'),
        returns = document.createElement('button');
        txt.appendChild(document.createTextNode(this.name));
        find.appendChild(document.createTextNode('Searching opponent....'));
        img.id = 'battleback';
        returns.id = 'returns';
        jetblack.id = 'jetblack';
        returns.addEventListener('click', killblack);
        txt.style.textAlign = 'center';
        find.style.textAlign = 'center';
        txt.style.marginTop = '10%';
        img.style.marginTop = '10%';
        find.style.marginTop = '10%';
        jetblack.appendChild(txt);
        jetblack.appendChild(img);
        jetblack.appendChild(find);
        jetblack.appendChild(returns);
        containernew.appendChild(jetblack);
        document.body.style.pointerEvents = 'none';
        setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 500);

        switch (this.name) {
            case 'Ranked Battle': val = '1'; ; break;
            case 'Mission Battle': val = '2'; break;
            case 'Training Battle': val = '3'; break;
            case 'Private Battle': val = '4'; break;
            default: alert('ERROR: 400 Bad Request');
        }

        search = true;
        setTimeout(function () {
        returns.disabled = 'disabled'; returns.style.opacity = 0.1; find.innerText = 'Opponent found!\nEntering battle...';
        setTimeout(function () {
            if (search === true) {
                window.open('battle.html?mode='+val, '_self');
            }
        }, 1000);
        }, 2000);
    }

    // Init Events
    profile.addEventListener('click', nextprofile);
    friends.addEventListener('click', nextfriends);
    team.addEventListener('click', nextteam);
    missions.addEventListener('click', nextmissions);
    battle.addEventListener('click', nextbattle);
}