    // ---- sauvegarde & load
	var dayy;
	var jauge1;
	var jauge2;
	var jauge3;
	var jauge4;
	var jauge5;

	function loadSave(){
		if(localStorage.getItem('d')) {
			dayy = parseInt(localStorage.getItem('d'),10);

			jauge1 = parseInt(localStorage.getItem('jj1'),10);
			jauge2 = parseInt(localStorage.getItem('jj2'),10);
			jauge3 = parseInt(localStorage.getItem('jj3'),10);
			jauge4 = parseInt(localStorage.getItem('jj4'),10);
			jauge5 = parseInt(localStorage.getItem('jj5'),10);
		} else {
			localStorage.setItem('d',3546);

			localStorage.setItem('jj1',125);
			localStorage.setItem('jj2',125);
			localStorage.setItem('jj3',125);
			localStorage.setItem('jj4',125);
			localStorage.setItem('jj5',125);

			loadSave();
		}
	}

	function Save(){
		localStorage.setItem('d',dayy);

		localStorage.setItem('jj1',jauge1);
		localStorage.setItem('jj2',jauge2);
		localStorage.setItem('jj3',jauge3);
		localStorage.setItem('jj4',jauge4);
		localStorage.setItem('jj5',jauge5);
	}

	function resetSave(){
		dayy = 3546;
		jauge1 = 125;
		jauge2 = 125;
		jauge3 = 125;
		jauge4 = 125;
		jauge5 = 125;

	    j1 = jauge1;
	    j2 = jauge2;
	    j3 = jauge3;
	    j4 = jauge4;
	    j5 = jauge5;

		Save();
		openInterface = 7;
		newEvent();
	}

	loadSave();

	var j1 = jauge1;
	var j2 = jauge2;
	var j3 = jauge3;
	var j4 = jauge4;
	var j5 = jauge5;

	// ----

	var openInterface = 1;
	var UIbase = 1;
	var UI = 1;
	var alt = 0;

	let playing = false;
	var son1;
	var allVid;
	var start = 0;
	var allIrrF = [];
	var allIrrM = [];

	// ---- setup canvas
	function setup() {
		createCanvas(window.innerWidth, window.innerHeight);
		background(0);

		vid1 = createVideo(['assets/vid/03x20.mp4']);
		vid1.hide();

		vid2 = createVideo(['assets/vid/01x12.mp4']);
		vid2.hide();

		vid3 = createVideo(['assets/vid/02x16.mp4']);
		vid3.hide();

		vid4 = createVideo(['assets/vid/02x22.mp4']);
		vid4.hide();

		son1 = createAudio('assets/son/musique1.mp3');


		allVid = [vid1, vid2, vid3, vid4];
	}

	// ---- load images
	function preload() {
		fontRegular = loadFont('assets/font/futura medium bt.ttf');
		fontBold = loadFont('assets/font/Futura Heavy font.ttf');

		img0 = loadImage('assets/img/T.png');

		img1 = loadImage('assets/img/asset/harold.png');
		img2 = loadImage('assets/img/asset/john.png');
		img3 = loadImage('assets/img/asset/fusco.png');
		img4 = loadImage('assets/img/asset/carter.png');
		img5 = loadImage('assets/img/asset/shaw.png');
		img6 = loadImage('assets/img/asset/root.png');

		img7 = loadImage('assets/img/indigo/cole.png');
		img8 = loadImage('assets/img/indigo/grice.png');
		img9 = loadImage('assets/img/indigo/brooks.png');
		img10 = loadImage('assets/img/indigo/hersh.png');
		img11 = loadImage('assets/img/indigo/nikita.png');

		pic1 = loadImage('assets/img/pic/pic1.png');

		box1 = loadImage('assets/img/boxes/yellow.png');
		box2 = loadImage('assets/img/boxes/white.png');
		box3 = loadImage('assets/img/boxes/black-yellow.png');
		box4 = loadImage('assets/img/boxes/blue.png');


		img1if = loadImage('assets/img/irrelevant/F/i1.png');
		img2if = loadImage('assets/img/irrelevant/F/i2.png');

		allIrrF = [img1if,img2if];

		img1im = loadImage('assets/img/irrelevant/H/i1.png');
		img2im = loadImage('assets/img/irrelevant/H/i2.png');

		allIrrM = [img1im,img2im];
    }


	// ---- draw interface
	var ec = 1.5;
	var pause = 0;
	var goo = 0;

	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	function drawInterface(open, ani, x, y, w, h, a, t1, ct1, t2, id, var1, var2, var3, var4, var5, var6, i) {

		textAlign(LEFT);
		textLeading(20);

		// ---- animation ouverture
		if (open === 1) {
			var yy = 0 + ani;
			if (t2 !== 'N') { yy += 14; }

			strokeWeight(ec);
			stroke(255);
			fill('rgba(10,10,10, 0.80)');
			rect(x, y, w, 42 + yy, 3);
			noStroke();

			if (t2 !== 'N') {
				fill(255);
				rect(x, y + 20 + (ec / 2), w, 14);
				fill(0);
				textSize(11);
				textFont(fontBold);
				text(t2, x + 7, y + 31.5);
			}

			rect(x + (ec / 2), y + (ec / 2), w - ec, 20, 3, 3, 0, 0);
			rect(x + (ec / 2), y + 22 + yy - (ec / 2), w - ec, 20, 0, 0, 3, 3);

			if (a === 'N') {
				fill(ct1);
				textSize(13);
				textFont(fontRegular);
				text(t1, x + 7, y + 16);
			} else {
				fill(a);
				textSize(11);
				textFont(fontBold);
				text('[ ! ]', x + 7, y + 14);
				fill(ct1);
				textSize(13);
				textFont(fontBold);
				text(t1, x + 30, y + 16);
			}

			Interface[i].ani += 10;
			if (Interface[i].ani >= h - (yy - ani) - 40) { Interface[i].open = 0; }

		}

		if (open === 0) {

		// affichage forme interface
		strokeWeight(ec);
		stroke(255);
		fill('rgba(10,10,10, 0.80)');
		rect(x, y, w, h, 3);

		fill(0);
		noStroke();
		rect(x + (ec / 2), y + (ec / 2), w - ec, 20, 3, 3, 0, 0);

		rect(x + (ec / 2), y + h - 20 - (ec / 2), w - ec, 20, 0, 0, 3, 3);

		if (t2 !== 'N') {
			fill(255);
			rect(x, y + 20 + (ec / 2), w, 14);
		}

		// ----

		if (a === 'N') {
			fill(ct1);
			textSize(13);

			textFont(fontRegular);
			text(t1, x + 7, y + 16);
		} else {
			fill(a);
			textSize(11);
			textFont(fontBold);
			text('[ ! ]', x + 7, y + 14);

			fill(ct1);
			textSize(13);

			textFont(fontBold);
			text(t1, x + 30, y + 16);

		}

		// ---- calcule pour ligne event

		if (event.id === 1) {

			if (id === 11) {
				event.x4 = x;
				event.y4 = y + (h/2);
			}

			if (id === 10) {

			    event.x1 = x + (w/2);
				event.y1 = y + h;
			}

			if (id === 9) {
				event.x2 = x + (w/2);
				event.y2 = y;

				event.x3 = x + w;
				event.y3 = y + (h/2);
			}
		}

		if (event.id === 2) {

			if (id === 11) {
				event.x4 = x;
				event.y4 = y + (h/2);
			}

			if (id === 21) {
			    event.x1 = x + (w/2);
				event.y1 = y + h;
			}

			if (id === 9) {
				event.x2 = x + (w/2);
				event.y2 = y;

				event.x3 = x + w;
				event.y3 = y + (h/2);
			}
		}

		if (event.id === 1) {

			if (id === 13) {
			    event.x1 = x + (w/2);
				event.y1 = y + h;
			}

			if (id === 14) {
				event.x2 = x + (w/2);
				event.y2 = y;
			}
		}

		if (event.id === 4) {
			if (event.c1 !== 'N') {
				if (id === 14) {
					event.x4 = x;
					event.y4 = y + (h/2);
				}
			} else {
				if (id === 17) {
					event.x4 = x;
					event.y4 = y + (h/2);
				}
			}

			if (id === 1) {
				event.x2 = x + (w/2);
				event.y2 = y;

				event.x3 = x + w;
				event.y3 = y + (h/2);
			}
		}

		// affichage ligne blanche
		if (t2 === 'N') {
			y -= 18;
		} else {
			fill(0);
			textSize(11);
			textFont(fontBold);
			text(t2, x + 7, y + 31.5);
		}

		// ---- affichage interne selon id

		textFont(fontRegular);
		noStroke();
		textAlign(LEFT);

		// id text normal
		if (id === 1) {
			fill(225);
			textSize(13);
			textLeading(20);
			text(var1, x + 7, y + 55);
		}

		// id jauges 1
		if (id === 2) {
			noStroke();
			fill(0);
			rect(x + 7, y + 42, 257, 12);

			textFont(fontBold);
			textSize(10);
			fill(255);
			text('STATUS:', x + 9, y + 51);

			textSize(13);
			fill(255);

			var ctrl = '';
			if (alt === 1) {
				if (event.jauge1y === -1 || event.jauge1y === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge1y === -2 || event.jauge1y === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			if (alt === 2) {
				if (event.jauge1n === -1 || event.jauge1n === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge1n === -2 || event.jauge1n === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			text('DISCRETION', x + 7, y + 71);
			textSize(11);
			text(ctrl, x + 86, y + 70);

			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 8, y + 81, 254, 16);
			noStroke();
			fill(255);
			if (j1 > jauge1) { jauge1 += 2; }
			if (j1 < jauge1) { jauge1 -= 2; }
			if (jauge1 < 26) { fill(205, 0, 0); }
			rect(x + 11, y + 84.5, jauge1, 10);

			// -----

			noStroke();
			fill(0);
			rect(x + 7, y + 105, 257, 12);

			textSize(10);
			fill(255);
			text('STATUS:', x + 9, y + 114);

			textSize(13);
			fill(255);

			var ctrl = '';
			if (alt === 1) {
				if (event.jauge2y === -1 || event.jauge2y === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge2y === -2 || event.jauge2y === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			if (alt === 2) {
				if (event.jauge2n === -1 || event.jauge2n === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge2n === -2 || event.jauge2n === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			text("MORALS", x + 7, y + 134);
			textSize(11);
			text(ctrl, x + 60, y + 133);

			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 8, y + 144, 254, 16);
			noStroke();
			fill(255);
			if (j2 > jauge2) { jauge2 += 2; }
			if (j2 < jauge2) { jauge2 -= 2; }
			if (jauge2 < 26) { fill(205, 0, 0); }
			rect(x + 11, y + 147.5, jauge2, 10);
		}

		// id jauges 2
		if (id === 3) {

			noStroke();
			fill(0);
			rect(x + 7, y + 42, 257, 12);

			textFont(fontBold);
			textSize(10);
			fill(255);
			text('STATUS:', x + 9, y + 51);

			textSize(13);

			var ctrl = '';
			if (alt === 1) {
				if (event.jauge3y === -1 || event.jauge3y === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge3y === -2 || event.jauge3y === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			if (alt === 2) {
				if (event.jauge3n === -1 || event.jauge3n === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge3n === -2 || event.jauge3n === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			text('IRRELEVANT NUMBER', x + 7, y + 71);
			textSize(11);
			text(ctrl, x + 143, y + 70);

			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 8, y + 81, 254, 16);
			noStroke();
			fill(255);

			if (j3 > jauge3) { jauge3 += 2; }
			if (j3 < jauge3) { jauge3 -= 2; }

			if (jauge3 < 26) { fill(205, 0, 0); }
			rect(x + 11, y + 84.5, jauge3, 10);

			// -----

			noStroke();
			fill(0);
			rect(x + 7, y + 105, 257, 12);

			textSize(10);
			fill(255);
			text('STATUS:', x + 9, y + 114);

			textSize(13);
			fill(255);

			var ctrl = '';
			if (alt === 1) {
				if (event.jauge4y === -1 || event.jauge4y === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge4y === -2 || event.jauge4y === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			if (alt === 2) {
				if (event.jauge4n === -1 || event.jauge4n === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge4n === -2 || event.jauge4n === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			text("RELEVANT NUMBER", x + 7, y + 134);
			textSize(11);
			text(ctrl, x + 131, y + 133);

			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 8, y + 144, 254, 16);
			noStroke();
			fill(255);
			if (j4 > jauge4) { jauge4 += 2; }
			if (j4 < jauge4) { jauge4 -= 2; }
			if (jauge4 < 26) { fill(205, 0, 0); }
			rect(x + 11, y + 147.5, jauge4, 10);

			// -----

			noStroke();
			fill(0);
			rect(x + 7, y + 168, 257, 12);

			textSize(10);
			fill(255);
			text('STATUS:', x + 9, y + 177);

			textSize(13);
			fill(255);

			var ctrl = '';
			if (alt === 1) {
				if (event.jauge5y === -1 || event.jauge5y === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge5y === -2 || event.jauge5y === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			if (alt === 2) {
				if (event.jauge5n === -1 || event.jauge5n === 1) { var ctrl = '  [ ! ]'; }
				if (event.jauge5n === -2 || event.jauge5n === 2) { var ctrl = '  [ ! ]  [ ! ]'; }
			}
			text("THERTIARY-OPERATION", x + 7, y + 197);
			textSize(11);
			text(ctrl, x + 156, y + 196);


			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 8, y + 207, 254, 16);
			noStroke();
			fill(255);
			if (j5 > jauge5) { jauge5 += 2; }
			if (j5 < jauge5) { jauge5 -= 2; }
			if (jauge5 < 26) { fill(205, 0, 0); }
			rect(x + 11, y + 210.5, jauge5, 10);
		}

		// id jours
		if (id === 4) {
			fill(255);
			textSize(15);
			textFont(fontBold);
			text(' DAY ' + dayy, x + 8, y + 43);

		}

		// id personnage
		if (id === 5) {

			fill(0);
			stroke(255,255,255);
			strokeWeight(1);
			rect(x + 18, y + 42, 134, 154);

			for(var p=0; p < Personnage.length; p++){

				if (Personnage[p].id === var4) {

					if (var4 === 1) {
						image(img1, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box1,x+23,y+50,100,100); }
					}

					if (var4 === 2) {
						image(img2, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box1,x+49,y+45,100,100); }
					}

					if (var4 === 3) {
						image(img3, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box2,x+41,y+50,100,100); }
					}

					if (var4 === 4) {
						image(img4, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box1,x+46,y+48,100,100); }
					}

					if (var4 === 5) {
						image(img5, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box1,x+43,y+52,100,100); }
					}

					if (var4 === 6) {
						image(img6, x + 19, y + 43, 133, 153);
						if (UI === 5 && Personnage[p].select === 1) { image(box3,x+40,y+50,100,100); }
					}

					// ----

					if (var4 === 7) {
						image(img5, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+43,y+52,100,100); }
					}

					if (var4 === 8) {
						image(img7, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+46,y+60,100,100); }
					}

					if (var4 === 9) {
						image(img8, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+41,y+53,100,100); }
					}

					if (var4 === 10) {
						image(img9, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+41,y+54,100,100); }
					}

					if (var4 === 11) {
						image(img10, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+39,y+53,100,100); }
					}

					if (var4 === 12) {
						image(img11, x + 19, y + 43, 133, 153);
						if (UI === 6 && Personnage[p].select === 1) { image(box4,x+47,y+52,100,100); }
					}
				}

			}

			textFont(fontRegular);
			noStroke();

			textSize(11);
			fill(205);
			text('ALIAS:', x + 7, y + 214);
			text('STATUS:', x + 7, y + 234);
			text('OCCUPATION:', x + 7, y + 254);

			textFont(fontBold);

			textAlign(RIGHT);
			if (var2 === 1) {
				fill(255);
				text('ALIVE', x + 165, y + 234);
			}
			if (var2 === 2) {
				fill(255, 0 , 0);
				text('ON DUTY', x + 165, y + 234);
			}
			if (var2 === 3) {
				fill(255, 0 , 0);
				text('DECEASED', x + 165, y + 234);
			}
			if (var2 === 4) {
				fill(255, 0 , 0);
				text('DEFECTED', x + 165, y + 234);
			}
			if (var2 === 5) {
				fill(255, 0 , 0);
				text('UNKNOW', x + 165, y + 234);
			}

			textFont(fontBold);
			fill(255);
			text(var1, x + 165, y + 214);

			textFont(fontBold);
			fill(255);
			text(var3, x + 165, y + 254);

			textAlign(LEFT);

			if (UI === 8) {
				xxx = xx;
				yyy = yi;

				if (200 > xx) { xx += 10; }
				if (200 < xx) { xx -= 10; }

				if (window.innerHeight/2 - (284/2) > yi) { yi += 10; }
				if (window.innerHeight/2 - (284/2) < yi) { yi -= 10; }

				Interface[i].posX = xx;
				Interface[i].posY = yi;
				if (xxx === xx && yyy === yi) { goo += 1;};
			}
		}

		// id info admin
		if (id === 6) {
			fill(205);
			textSize(13);
			textFont(fontRegular);
			text('ALIAS:', x + 7, y + 54);
			text('DAY:', x + 7, y + 74);

			fill(255);
			textFont(fontBold);
			textAlign(RIGHT);
			text('SAM 4AF', x + 220, y + 54);
			text(dayy, x + 220, y + 74);

			textAlign(LEFT);
			fill(255,255,0);
			text('ADMIN ACCESS', x + 7, y + 94);
		}

		// id interface poi
		if (id === 7) {

			textFont(fontBold);
			textSize(13);
			fill(255);
			text('ASSET', x + 7, y + 54);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			textFont(fontRegular);
			if (UI === 2) { fill (255,255,0); } else { fill(255); }
			if (UI === 8 && perso < 7) { fill (255,255,0); }

			text('VIEW DETAIL', x + 74, y + 77);

			stroke(255);
			strokeWeight(0.5);
			fill(255);
			line(x + 7, y + 90, x + 223, y + 90);
			line(x + 7, y + 94, x + 223, y + 95);
			// -------

			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			text('INDIGO', x + 7, y + 113);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 121, 214, 20);

			noStroke();
			if (UI === 3) { fill (255,255,0); } else { fill(255); }
			if (UI === 8 && perso > 6) { fill (255,255,0); }
			textFont(fontRegular);
			text('VIEW DETAIL', x + 74, y + 136);

			stroke(255,255,255);
			strokeWeight(0.5);
			fill(255);
			line(x + 7, y + 149, x + 223, y + 149);
			line(x + 7, y + 153, x + 223, y + 153);

			// -------

			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			text('ALL', x + 7, y + 172);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 180, 214, 20);

			noStroke();
			if (UI === 4) { fill (255,255,0); } else { fill(255); }
			textFont(fontRegular);
			text('VIEW DETAIL', x + 74, y + 195);

		}

		// id interface retour
		if (id === 8) {
			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			text('MAIN MENU', x + 7, y + 54);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			fill('rgba(255,0,0, 0.75)');
			rect(x + 10, y + 64, 210, 16);

			noStroke();
			fill(255);

			text('     BACK', x + 74, y + 77);
		}

		// id competence requise
		if (id === 9) {
			fill(205);
			textSize(12);
			textFont(fontRegular);
			text('COMPETENCES REQUISES :', x + 7, y + 54);
			fill(255);
			textFont(fontBold);
			textSize(13);

			if (var1 === 1) text('CLOSE COMBAT', x + 7, y + 74);
			if (var1 === 2) text('REMOTE COMBAT', x + 7, y + 74);
			if (var1 === 3) text('RESISTANCE', x + 7, y + 74);
			if (var1 === 4) text('MEDECINE', x + 7, y + 74);
			if (var1 === 5) text('ESPIONNAGE', x + 7, y + 74);
			if (var1 === 6) text('HACKING', x + 7, y + 74);

			if (var2 === 1) text('CLOSE COMBAT', x + 7, y + 94);
			if (var2 === 2) text('REMOTE COMBAT', x + 7, y + 94);
			if (var2 === 3) text('RESISTANCE', x + 7, y + 94);
			if (var2 === 4) text('MEDECINE', x + 7, y + 94);
			if (var2 === 5) text('ESPIONNAGE', x + 7, y + 94);
			if (var2 === 6) text('HACKING', x + 7, y + 94);

			fill(205);
			textFont(fontRegular);
			textSize(12);
			text('CLASSIFICATION :', x + 7, y + 124);
			fill(255);
			textFont(fontBold);
			textSize(13);
			text(var3, x + 7, y + 144);
		}

		// id irrelevant number
		if (id === 10) {

			fill(0);
			stroke(255,255,255);
			strokeWeight(0.9);
			rect(x + 7, y + 42, 119, 136);

			if (event.id === 1 && UI === 1) {
				if (event.sexe === 1) {
					image(allIrrF[event.image], x + 8, y + 43, 117, 135);
				} else {
					image(allIrrM[event.image], x + 8, y + 43, 117, 135);
				}
			}

			if (UI === 4) {

				if (perso === 1) {
					image(img1, x + 8, y + 43, 117, 135);
				}

				if (perso === 2) {
					image(img2, x + 8, y + 43, 117, 135);
				}

				if (perso === 3) {
					image(img3, x + 8, y + 43, 117, 135);
				}

				if (perso === 4) {
					image(img4, x + 8, y + 43, 117, 135);
				}

				if (perso === 5) {
					image(img5, x + 8, y + 43, 117, 135);
				}

				if (perso === 6) {
					image(img6, x + 8, y + 43, 117, 135);
				}

				if (perso === 7) {
					image(img5, x + 8, y + 43, 117, 135);
				}

				if (perso === 8) {
					image(img7, x + 8, y + 43, 117, 135);
				}

				if (perso === 9) {
					image(img8, x + 8, y + 43, 117, 135);
				}

				if (perso === 10) {
					image(img9, x + 8, y + 43, 117, 135);
				}

				if (perso === 11) {
					image(img10, x + 8, y + 43, 117, 135);
				}

				if (perso === 12) {
					image(img11, x + 8, y + 43, 117, 135);
				}
			}

			noStroke();

			fill(100);
			textSize(11);
			textFont(fontRegular);
			text(var6, x + 304, y + 31.5);

			fill(205);
			textFont(fontRegular);
			textSize(11);
			text('DOB :', x + 135, y + 58);
			text('POB :', x + 135, y + 81);

			text('ADDRESS :', x + 135, y + 109);

			text('OCCUPATION :', x + 135, y + 157);

			textFont(fontBold);
			fill(255);
			text(var1, x + 178, y + 58);
			text(var2, x + 178, y + 81);

			text(var3, x + 227, y + 109);
			text(var4, x + 227, y + 129);

			text(var5, x + 227, y + 157);
		}

		// id select asset
		if (id === 11) {
			textFont(fontBold);
			textSize(13);
			fill(255);
			text('SELECT ASSET', x + 7, y + 54);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			fill(255);
			text('    SELECT', x + 74, y + 77);

			stroke(255);
			strokeWeight(0.5);
			fill(255);
			line(x + 7, y + 90, x + 223, y + 90);
			line(x + 7, y + 94, x + 223, y + 95);
			// -------

			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			text('REFUSE THE NUMBER', x + 7, y + 113);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 121, 214, 20);

			noStroke();
			fill(255, 0, 0);

			text('    REFUSE', x + 74, y + 136);
		}

		// id valide
		if (id === 12) {

			textFont(fontBold);
			textSize(13);
			fill(255, 255, 255);
			text('SUBMIT', x + 7, y + 54);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			textFont(fontRegular);

			var a = 0;
			for(var p=0; p < Personnage.length; p++){
				if (Personnage[p].select === 1) { a++; }
			}
			if (a > 1) {
				fill (255,255,0);
				text('GO', x + 98, y + 77);
			} else {
				fill (255);
				text(a, x + 95, y + 77);
				text(' / 2', x + 103, y + 77);
			}


			stroke(255);
			strokeWeight(0.5);
			fill(255);
			line(x + 7, y + 90, x + 223, y + 90);
			line(x + 7, y + 94, x + 223, y + 95);
			// -------


			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			text('MAIN MENU', x + 7, y + 113);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 121, 214, 20);

			noStroke();
			fill('rgba(255,0,0, 0.75)');
			rect(x + 10, y + 123, 210, 16);

			noStroke();
			fill(255);

			text('     BACK', x + 74, y + 136);
		}



		if (id === 14) {
			textFont(fontBold);
			textSize(13);
			fill(255);

			if (event.id === 4) {
				text(event.c1, x + 7, y + 54);
			} else {
				text('ACCEPT EVENT', x + 7, y + 54);
			}

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			fill(255);
			textAlign(CENTER);
			if (event.id === 4) {
				text(event.c2, x + 110, y + 77);
			} else {
				text('    ACCEPT', x + 110, y + 77);
			}
			stroke(255);
			strokeWeight(0.5);
			fill(255);
			line(x + 7, y + 90, x + 223, y + 90);
			line(x + 7, y + 94, x + 223, y + 95);
			// -------
			textAlign(LEFT);
			noStroke();
			textSize(13);
			fill(255);
			textFont(fontBold);
			if (event.id === 4) {
				text(event.c3, x + 7, y + 113);
			} else {
				text('REFUSE EVENT', x + 7, y + 113);
			}
			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 121, 214, 20);

			noStroke();
			fill(255);
			textAlign(CENTER);
			if (event.id === 4) {
				text(event.c4, x + 110, y + 136);
			} else {
				text('    REFUSE', x + 110, y + 136);
			}
		}


		if (id === 17) {
			textFont(fontBold);
			textSize(13);
			fill(255);
			text('CONTINUE ?', x + 7, y + 54);

			stroke(255,255,255);
			strokeWeight(0.7);
			fill(0);
			rect(x + 8, y + 62, 214, 20);

			noStroke();
			fill(255);
			textAlign(CENTER);
			text('YES', x + 110, y + 77);
		}

		if (id === 18) {
			if (s1 < var1) { s1 += 0.05 } else { s1 = var1 }
			if (s2 < var2) { s2 += 0.05 } else { s2 = var2 }
			if (s3 < var3) { s3 += 0.05 } else { s3 = var3 }
			if (s4 < var4) { s4 += 0.05 } else { s4 = var4 }
			if (s5 < var5) { s5 += 0.05 } else { s5 = var5 }
			if (s6 < var6) { s6 += 0.05 } else { s6 = var6 }

			aa = s1; //CLOSE COMBAT
			bb = s2; //REMOTE COMBAT
			cc = s3; //RESISTANCE
			dd = s6; //MEDECINE
			ee = s5; //ESPIONNAGE
			ff = s4; //HACKING

			stroke(255,255,255);
			strokeWeight(0.7);
			fill('rgba(10,10,10, 0.01)');
			ellipse(x+78, y+110, 130, 130);

			line(x+13,y+110,x+143,y+110);

			line(x+78,y+110,x+45.5,y+55);
			line(x+78,y+110,x+110.5,y+55);

			line(x+78,y+110,x+45.5,y+165);
			line(x+78,y+110,x+110.5,y+165);

			noStroke();
			fill('rgba(255,0,0, 0.50)');

			triangle(x+13+(65-65*aa), y+110, x+45.5+(33.5-33.5*bb), y+55+(55-55*bb), x+78, y+110);
			triangle(x+45.5+(33.5-33.5*bb), y+55+(55-55*bb), x+78, y+110, x+110.5-(33.5-33.5*cc), y+55+(55-55*cc));
			triangle(x+143-(65-65*dd), y+110, x+78, y+110, x+110.5-(33.5-33.5*cc), y+55+(55-55*cc));

			triangle(x+13+(65-65*aa), y+110, x+45.5+(33.5-33.5*ff), y+165-(55-55*ff), x+78, y+110);
			triangle(x+45.5+(33.5-33.5*ff), y+165-(55-55*ff), x+78, y+110, x+110.5-(33.5-33.5*ee), y+165-(55-55*ee));
			triangle(x+143-(65-65*dd), y+110, x+78, y+110, x+110.5-(33.5-33.5*ee), y+165-(55-55*ee));

			stroke(155);
			strokeWeight(1);
			fill('rgba(10,10,10, 1)');
			ellipse(x+78, y+110, 20, 20);

			noStroke();
			fill('rgba(255,0,0, 0.50)');
			ellipse(x+78, y+110, 20, 20);

			fill(255);
			textSize(11);
			textFont(fontBold);

			text('CLOSE COMBAT',x+160,y+60);
			rect(x+275,y+52,80*aa,8)
			text('REMOTE COMBAT',x+160,y+81);
			rect(x+275,y+73,80*bb,8)
			text('RESISTANCE',x+160,y+102);
			rect(x+275,y+94,80*cc,8)
			text('MEDECINE',x+160,y+123);
			rect(x+275,y+115,80*dd,8)
			text('ESPIONNAGE',x+160,y+144);
			rect(x+275,y+136,80*ee,8)
			text('HACKING',x+160,y+165);
			rect(x+275,y+157,80*ff,8)
		}

		if (id === 21) {

			if (event.id === 2) {
				if (Date.now() - event.time > event.tick && event.nbr < event.max) {
					event.time = Date.now();
					generate2();
					event.nbr++;
				}
			}

			textSize(13);

			fill(205);
			textFont(fontRegular);
			text('CLASSIFICATION:', x + 7, y + 52);
			textFont(fontBold);
			fill(255, 0, 0);
			text('RELEVANT', x + 120, y + 52);

			fill(205);
			textFont(fontRegular);
			text('MULTIPLE SUBJECTS INVOLVED (' + event.nbr + '/' + event.max + ')', x + 7, y + 72);

			text('SUBJECT:', x + 7, y + 105);
			text('SSN:', x + 7, y + 125);
			text('OCCUPATION:', x + 7, y + 145);

			textFont(fontBold);
			fill(255);
			text(event.name, x + 110, y + 105);
			text(event.ssn, x + 110, y + 125);
			text(event.occ, x + 110, y + 145);
		}

		}

		if (open === 3) {

			if (id === 16) {

			    event.x1 = x + (w/3);
				event.y1 = y + h;

				pause = 1;
				for(var v=0; v < allVid.length; v++){
					if (event.image === v+1) { image(allVid[v],x,y,w,h); }
				}

				fill(255);
				stroke(255);
				strokeWeight(2);
				line(x-3,y-5,x-3,y+3);
				line(x-3,y-5,x+7,y-5);

				line(x+5+w,y-5,x+5+w,y+3);
				line(x+5+w,y-5,x+w-5,y-5);

				line(x-5,y+h+5,x-5,y+h-3);
				line(x-5,y+h+5,x+5,y+h+5);

				line(x+5+w,y+h+5,x+5+w,y+h-3);
				line(x+5+w,y+h+5,x-5+w,y+h+5);
			}

			if (id === 20) {

				if (var1 === 1) { image(pic1,x,y,w,h); }

				fill(255);
				stroke(255);
				strokeWeight(2);
				line(x-3,y-5,x-3,y+3);
				line(x-3,y-5,x+7,y-5);

				line(x+5+w,y-5,x+5+w,y+3);
				line(x+5+w,y-5,x+w-5,y-5);

				line(x-5,y+h+5,x-5,y+h-3);
				line(x-5,y+h+5,x+5,y+h+5);

				line(x+5+w,y+h+5,x+5+w,y+h-3);
				line(x+5+w,y+h+5,x-5+w,y+h+5);
			}

		}

	}

	var Personnage = [];
	function PersonnageCreation(a, b, c, d, e, f, g, h, i, j, k, l, m){
		this.id = a;

		this.cla = b;
		this.col = c;
		this.ssd = d;

		this.alias = e;
        this.status = f;
        this.occ = g;

		this.stat1 = h;
		this.stat2 = i;
		this.stat3 = j;
		this.stat4 = k;
		this.stat5 = l;
		this.stat6 = m;

		this.select = 0;
		this.day = 0;
		Personnage.push(this);
    };

	function PersoMaj() {
		Personnage = [];

		new PersonnageCreation(
			1,

			'ADMIN',
			'rgb(255, 255, 0)',
			'xxx-xx-5492',

			'FINCH, HAROLD',
			1,
			'REDACTED',

			0.2, //CLOSE COMBAT
			0.2, //REMOTE COMBAT
			0.2, //RESISTANCE
			1, //HACKING
			1, //ESPIONNAGE
			0.8, //MEDECINE
		);

		new PersonnageCreation(
			2,

			'PRIMARY ASSET',
			'rgb(255, 255, 0)',
			'xxx-xx-0050',

			'REESE, JOHN',
			1,
			'REDACTED',

			1, //CLOSE COMBAT
			0.9,  //REMOTE COMBAT
			0.8, //RESISTANCE
			0.2, //HACKING
			0.8, //ESPIONNAGE
			0.2, //MEDECINE
		);

		new PersonnageCreation(
			3,

			'SECONTARY ASSET',
			'rgb(255, 255, 255)',
			'xxx-xx-4793',

			'LIONNEL, FUSCO',
			1,
			'NYPD',

			0.8, //CLOSE COMBAT
			0.7,  //REMOTE COMBAT
			1, //RESISTANCE
			0.2, //HACKING
			0.2, //ESPIONNAGE
			0.2, //MEDECINE
		);

		new PersonnageCreation(
			4,

			'ASSET',
			'rgb(255, 255, 0)',
			'xxx-xx-7863',

			'CARTER, JOSS',
			0,
			'NYPD',

			0.2, //CLOSE COMBAT
			1,  //REMOTE COMBAT
			0.2, //RESISTANCE
			0.2, //HACKING
			1, //ESPIONNAGE
			0.8, //MEDECINE
		);

		new PersonnageCreation(
			5,

			'ASSET',
			'rgb(255, 255, 0)',
			'xxx-xx-0216',

			'SHAW, SAMEEN',
			0,
			'REDACTED',

			1, //CLOSE COMBAT
			1,  //REMOTE COMBAT
			1, //RESISTANCE
			0.2, //HACKING
			0.7, //ESPIONNAGE
			1, //MEDECINE
		);

		new PersonnageCreation(
			6,

			'ANALOG INTERFACE',
			'rgb(255, 255, 0)',
			'xxx-xx-0510',

			'ROOT',
			0,
			'REDACTED',

			0.8, //CLOSE COMBAT
			1,  //REMOTE COMBAT
			1, //RESISTANCE
			1, //HACKING
			0.8, //ESPIONNAGE
			0.9, //MEDECINE
		);

		// ----
		new PersonnageCreation(
			7,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-0216',

			'SHAW, SAMEEN',
			1,
			'ISA AGENT',

			1, //CLOSE COMBAT
			1,  //REMOTE COMBAT
			1, //RESISTANCE
			0.2, //HACKING
			0.7, //ESPIONNAGE
			1, //MEDECINE
		);

		new PersonnageCreation(
			8,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-4472',

			'COLE, MICHAEL',
			1,
			'ISA AGENT',

			0.2, //CLOSE COMBAT
			0.2,  //REMOTE COMBAT
			0.2, //RESISTANCE
			1, //HACKING
			1, //ESPIONNAGE
			0.8, //MEDECINE
		);

		new PersonnageCreation(
			9,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-2696',

			'DEVON, GRICE',
			1,
			'ISA AGENT',

			1, //CLOSE COMBAT
			0.7,  //REMOTE COMBAT
			1, //RESISTANCE
			0.2, //HACKING
			0.2, //ESPIONNAGE
			0.2, //MEDECINE
		);

		new PersonnageCreation(
			10,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-3570',

			'BROOKS',
			1,
			'ISA AGENT',

			0.4, //CLOSE COMBAT
			1,  //REMOTE COMBAT
			0.3, //RESISTANCE
			0.2, //HACKING
			1, //ESPIONNAGE
			1, //MEDECINE
		);

		new PersonnageCreation(
			11,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-2298',

			'HERSH, ROBERT',
			1,
			'ISA AGENT',

			1, //CLOSE COMBAT
			0.3,  //REMOTE COMBAT
			1, //RESISTANCE
			0.2, //HACKING
			1, //ESPIONNAGE
			0.2, //MEDECINE
		);

		new PersonnageCreation(
			12,

			'INDIGO',
			'rgb(40, 40, 255)',
			'xxx-xx-5842',

			'NIKITA',
			1,
			'ISA AGENT',

			0.9, //CLOSE COMBAT
			0.5,  //REMOTE COMBAT
			1, //RESISTANCE
			1, //HACKING
			0.7, //ESPIONNAGE
			0.2, //MEDECINE
		);
	}

	// ----

	var Interface = [];
	function InterfaceCreation(open, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p){
		this.open = open;
		this.ani = x;
        this.posX = a;
        this.posY = b;

		this.largeur = c;
        this.hauteur = d;

		this.moove = e;

		this.alert = f;
		this.t1 = g;
		this.ct1 = h;
		this.t2 = i;

		this.id = j;
		this.var1 = k;
		this.var2 = l;
		this.var3 = m;
		this.var4 = n;
		this.var5 = o;
		this.var6 = p;

		Interface.push(this);
    };

	function UI0(z){

		new InterfaceCreation(
			z, //open
			10, //ani
			window.innerWidth - 40 - 230, //posX
			40, //posY
			230, //largeur
			104, //hauteur
			0, //moove

			'rgb(255,255,0)', //alert
			'MONITORING PLAYER', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'N', //titre2

			6 //id draw
		);

		new InterfaceCreation(
			z, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			185, //posY
			230, //largeur
			230, //hauteur
			0, //moove

			'N', //alert
			'LIST OF POI', //titre1
			'rgb(255, 255, 0)', //couleur titre1
			'USER INTERFACE', //titre2

			7, //id draw

		);

	}

	function UI1(z){

		if (event.id === 1) {

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 150, //posX
				window.innerHeight - 80 - 172, //posY
				230, //largeur
				154, //hauteur
				0, //moove

				'rgb(255, 255, 255)', //alert
				'THREAT DETECTED', //titre1
				'rgb(255, 0, 0)', //couleur titre1
				'N', //titre2

				9, //id draw

				event.comp1,
				event.comp2,

				event.jauge1,
			);

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 110, //posX
				120, //posY
				370, //largeur
				207, //hauteur
				0, //moove

				'N', //alert
				'MONITORING SUBJECT', //titre1
				'rgb(255, 255, 255)', //couleur titre1
				event.name, //titre2

				10, //id draw
				event.dob,
				event.pob,
				event.address1,
				event.address2,
				event.occ,
				event.ssn,
			);

			new InterfaceCreation(
				1, //open
				0, //ani
				window.innerWidth - 40 - 230 - 60 - 230, //posX
				window.innerHeight - 80 - 172, //posY
				230, //largeur
				152, //hauteur
				0, //moove

				'N', //alert
				'ACQUIRING ASSET', //titre1
				'rgb(255, 255, 0)', //couleur titre1
				'N', //titre2

				11, //id draw
			);

		}

		if (event.id === 2) {

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 100, //posX
				140, //posY
				280, //largeur
				175, //hauteur
				0, //moove

				'N', //alert
				'THREAT TO THE NATIONAL SECURITY', //titre1
				'rgb(255, 255, 255)', //couleur titre1
				'REVELEVANT NUMBERS', //titre2

				21, //id draw

			);

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 150, //posX
				window.innerHeight - 80 - 172, //posY
				230, //largeur
				154, //hauteur
				0, //moove

				'rgb(255, 255, 255)', //alert
				'THREAT DETECTED', //titre1
				'rgb(255, 0, 0)', //couleur titre1
				'N', //titre2

				9, //id draw

				event.comp1,
				event.comp2,

				event.jauge1,
			);

			new InterfaceCreation(
				1, //open
				0, //ani
				window.innerWidth - 40 - 230 - 60 - 230, //posX
				window.innerHeight - 80 - 172, //posY
				230, //largeur
				152, //hauteur
				0, //moove

				'N', //alert
				'ACQUIRING ASSET', //titre1
				'rgb(255, 255, 255)', //couleur titre1
				'N', //titre2

				11, //id draw
			);

		}

		if (event.id === 3) {

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 110, //posX
				250 - event.nbr * 18, //posY
				350, //largeur
				70 + event.nbr * 20, //hauteur
				0, //moove

				'N', //alert
				event.t1, //titre1
				'rgb(255, 255, 255)', //couleur titre1
				event.t2, //titre2

				1, //id draw
				event.l,
			);

			new InterfaceCreation(
				1, //open
				0, //ani
				window.innerWidth/2 - 80, //posX
				420, //posY
				230, //largeur
				152, //hauteur
				0, //moove

				'N', //alert
				'CHOICE', //titre1
				'rgb(255, 255, 0)', //couleur titre1
				'N', //titre2

				14, //id draw
			);

		}

		if (event.id === 4) {

			new InterfaceCreation(
				1, //open
				0, //ani
				40 + 272 + 90, //posX
				window.innerHeight - 80 - 152, //posY
				300, //largeur
				152, //hauteur
				0, //moove

				'N', //alert
				event.t1, //titre1
				'rgb(255, 255, 255)', //couleur titre1
				event.t2, //titre2

				1, //id draw
				event.l,
			);

			if (event.c1 !== 'N') {
				new InterfaceCreation(
					1, //open
					0, //ani
					window.innerWidth - 40 - 230 - 60 - 230, //posX
					window.innerHeight - 80 - 152, //posY
					230, //largeur
					152, //hauteur
					0, //moove

					'N', //alert
					'CHOICE', //titre1
					'rgb(255, 255, 0)', //couleur titre1
					'N', //titre2

					14, //id draw
				);
			} else {
				new InterfaceCreation(
					1, //open
					0, //ani
					window.innerWidth - 40 - 230 - 60 - 230, //posX
					window.innerHeight - 80 - 152 + 28, //posY
					230, //largeur
					95, //hauteur
					0, //moove

					'N', //alert
					'CHOICE', //titre1
					'rgb(255, 255, 0)', //couleur titre1
					'N', //titre2

					17, //id draw
				);
			}

			new InterfaceCreation(
				3, //open
				0, //ani
				window.innerWidth/2 - 200, //posX
				120, //posY
				456, //largeur
				256, //hauteur
				0, //moove

				'N', //alert
				'', //titre1
				'', //couleur titre1
				'N', //titre2

				16, //id draw
			);
		}

		if (event.id === 5) {

			new InterfaceCreation(
				1, //open
				0, //ani
				window.innerWidth - (window.innerWidth/2) - 78, //posX
				window.innerHeight - 80 - 152 + 40, //posY
				230, //largeur
				95, //hauteur
				0, //moove

				'N', //alert
				'CHOICE', //titre1
				'rgb(255, 255, 0)', //couleur titre1
				'N', //titre2

				17, //id draw
			);

			if (event.suite === 1) {

				for(var p=0; p < Personnage.length; p++){
					if (Personnage[p].id === event.v1) {

						new InterfaceCreation(
						1, //open
						0, //ani
						window.innerWidth - (window.innerWidth/2) - 51, //posX
						120, //posY
						172, //largeur
						284, //hauteur
						0, //moove

						'N', //alert
						'NEW ASSET', //titre1
						Personnage[p].col, //couleur titre1
						Personnage[p].ssd, //titre2

						5, //id draw
						Personnage[p].alias,
						Personnage[p].status,
						Personnage[p].occ,
						Personnage[p].id,
						);

					}
				}

			}

			if (event.suite === 2) {
				new InterfaceCreation(
					z, //open
					0, //ani
					window.innerWidth - (window.innerWidth/2) - 91, //posX
					130, //posY
					250, //largeur
					event.v2, //hauteur
					0, //moove

					'N', //alert
					'CONSEQUENCES', //titre1
					'rgb(255, 255, 0)', //couleur titre1
					'INFORMATION', //titre2

					1, //id draw
					event.v1,
				);

			}

			if (event.suite === 3) {
				new InterfaceCreation(
					z, //open
					0, //ani
					window.innerWidth - (window.innerWidth/2) - 91, //posX
					130, //posY
					250, //largeur
					event.v4, //hauteur
					0, //moove

					'N', //alert
					'CONSEQUENCES', //titre1
					'rgb(255, 255, 0)', //couleur titre1
					'INFORMATION', //titre2

					1, //id draw
					event.v3,
				);
			}

		}

		new InterfaceCreation(
			z, //open
			0, //ani
			40, //posX
			40, //posY
			272, //largeur
			190, //hauteur
			0, //moove

			'N', //alert
			'STATUS OF SYSTEM', //titre1
			'rgb(255, 255, 0)', //couleur titre1
			'INFORMATION', //titre2

			2, //id draw
		);

		new InterfaceCreation(
			z, //open
			0, //ani
			40, //posX
			270, //posY
			272, //largeur
			255, //hauteur
			0, //moove

			'N', //alert
			'STATUS OF SYSTEM', //titre1
			'rgb(255, 255, 0)', //couleur titre1
			'INFORMATION', //titre2

			3, //id draw
		);

		new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - (window.innerWidth/2) - 20, //posX
			40, //posY
			100, //largeur
			40, //hauteur
			0, //moove

			'N', //alert
			'', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'N', //titre2

			4, //id draw
		);

	}

	function UI2(){

		var x = 40;
		var y = 30;
		var z = 7;
		if (UI === 5) { z = 6; }
		for(var i=0; i < Personnage.length; i++){

			if (Personnage[i].id < z && Personnage[i].status !== 0) {

				new InterfaceCreation(
				1, //open
				0, //ani
				x, //posX
				y, //posY
				172, //largeur
				284, //hauteur
				0, //moove

				'N', //alert
				Personnage[i].cla, //titre1
				Personnage[i].col, //couleur titre1
				Personnage[i].ssd, //titre2

				5, //id draw
				Personnage[i].alias,
				Personnage[i].status,
				Personnage[i].occ,
				Personnage[i].id,
				);


				x += 292;
				if (x === 624 + 292) {
					x = 40;
					y = 344;
				}


			}
		}

		if (UI !== 5) {

			new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			455, //posY
			230, //largeur
			113, //hauteur
			0, //moove

			'N', //alert
			'RETURN', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'USER INTERFACE', //titre2

			8, //id draw
			);

		}

	}

	function UI3(){

		var x = 40;
		var y = 30;
		for(var i=0; i < Personnage.length; i++){

			if (Personnage[i].id > 6 && Personnage[i].id < 13 && Personnage[i].status !== 0) {

				new InterfaceCreation(
				1, //open
				0, //ani
				x, //posX
				y, //posY
				172, //largeur
				284, //hauteur
				0, //moove

				'N', //alert
				Personnage[i].cla, //titre1
				Personnage[i].col, //couleur titre1
				Personnage[i].ssd, //titre2

				5, //id draw
				Personnage[i].alias,
				Personnage[i].status,
				Personnage[i].occ,
				Personnage[i].id,
				);

				x += 292;
				if (x === 624 + 292) {
					x = 40;
					y = 344;
				}


			}
		}

		if (UI !== 6) {
			new InterfaceCreation(
				0, //open
				0, //ani
				window.innerWidth - 40 - 230, //posX
				455, //posY
				230, //largeur
				113, //hauteur
				0, //moove

				'N', //alert
				'RETURN', //titre1
				'rgb(255, 255, 255)', //couleur titre1
				'USER INTERFACE', //titre2

				8, //id draw

			);
		}

	}

	function UI4(){



		new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			455, //posY
			230, //largeur
			113, //hauteur
			0, //moove

			'N', //alert
			'RETURN', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'USER INTERFACE', //titre2

			8, //id draw

		);

	}

	function UI5(){
		for(var i=0; i < Personnage.length; i++){
			Personnage[i].select = 0;
		}

		new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			455, //posY
			230, //largeur
			172, //hauteur
			0, //moove

			'N', //alert
			'RETURN', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'USER INTERFACE', //titre2

			12, //id draw

		);
	}

	function UI6(){

		for(var i=0; i < Personnage.length; i++){
			Personnage[i].select = 0;
		}

		new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			455, //posY
			230, //largeur
			172, //hauteur
			0, //moove

			'N', //alert
			'RETURN', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'USER INTERFACE', //titre2

			12, //id draw

		);
	}

	var perso;
	function UI8(gogo){

		for(var p=0; p < Personnage.length; p++){

			if (Personnage[p].id === perso) {

				if (gogo === 0) {
				new InterfaceCreation(
				0, //open
				0, //ani
				xx, //posX
				yi, //posY
				172, //largeur
				284, //hauteur
				0, //moove

				'N', //alert
				Personnage[p].cla, //titre1
				Personnage[p].col, //couleur titre1
				Personnage[p].ssd, //titre2

				5, //id draw
				Personnage[p].alias,
				Personnage[p].status,
				Personnage[p].occ,
				Personnage[p].id,
				);
				}

				if (gogo === 1) {
				new InterfaceCreation(
				1, //open
				0, //ani
				500, //posX
				window.innerHeight/2 - (204/2), //posY
				370, //largeur
				204, //hauteur
				0, //moove

				'N', //alert
				'ABILITIES OF SUBJECT', //titre1
				'rgb(255, 255, 255)', //couleur titre1
				'INFORMATION', //titre2

				18, //id draw
				Personnage[p].stat1,
				Personnage[p].stat2,
				Personnage[p].stat3,
				Personnage[p].stat4,
				Personnage[p].stat5,
				Personnage[p].stat6,
				);

				}
			}

		}

		new InterfaceCreation(
			0, //open
			0, //ani
			window.innerWidth - 40 - 230, //posX
			455, //posY
			230, //largeur
			113, //hauteur
			0, //moove

			'N', //alert
			'RETURN', //titre1
			'rgb(255, 255, 255)', //couleur titre1
			'USER INTERFACE', //titre2

			8, //id draw

		);
	}
	// ----



	function keyTyped() {

		if (key === ' ') {
			start = 1;
			for(var i=0; i < Interface.length; i++){

				if (Interface[i].open === 3) {

					if (Interface[i].id === 16) {
						for(var v=0; v < allVid.length; v++){
							if (event.image === v+1) {
								if (playing) {
									allVid[v].pause();
								} else {
									allVid[v].play();
								}
							}
						}
						playing = !playing;
					}
				}
			}
		}
		if (key === 'r') { resetSave(); }

    }

	var xx;
	var yi;
	function mouseClicked() {

		for(var i=0; i < Interface.length; i++){

			if (Interface[i].open === 3) {

				if (Interface[i].id === 16) {

					if (mouseX > Interface[i].posX && mouseX < Interface[i].posX + Interface[i].largeur) {
						if (mouseY > Interface[i].posY + 8 && mouseY < Interface[i].posY + Interface[i].hauteur) {

							for(var v=0; v < allVid.length; v++){
								if (event.image === v+1) {
									if (playing) {
										allVid[v].pause();
									} else {
										allVid[v].play();
									}
								}
							}
							playing = !playing;

						}
					}

				}
			}

			if (Interface[i].id === 17) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
						endEvent(1);
						openInterface = 7;
					}
				}

			}

			if (Interface[i].id === 5) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + Interface[i].largeur) {
					if (mouseY > Interface[i].posY && mouseY < Interface[i].posY + Interface[i].hauteur) {

						if (UI > 4 && UI < 7 && Interface[i].var2 === 1) {

							var idx = Interface[i].var4;

							for(var p=0; p < Personnage.length; p++){
								if (Personnage[p].id === idx) {
									if (Personnage[p].select === 0) {
										Personnage[p].select = 1;
									} else {
										Personnage[p].select = 0;
									}
								}
							}

						}

						if (UI === 2 || UI === 3) {
							goo = 0;
							perso = Interface[i].var4;
							xx = Interface[i].posX;
							yi = Interface[i].posY;
							openInterface = 8;
						}

					}
				}

			}

			if (Interface[i].id === 7) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 62 && mouseY < Interface[i].posY + 62 + 20) {
						openInterface = 2;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 121 && mouseY < Interface[i].posY + 121 + 20) {
						openInterface = 3;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + Interface[i].largeur + 8 + 214) {
					if (mouseY > Interface[i].posY + 180 && mouseY < Interface[i].posY + 180 + 20) {
						openInterface = 4;
					}
				}

			}

			if (Interface[i].id === 8) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 62 && mouseY < Interface[i].posY + 62 + 20) {
						openInterface = 1;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 62 && mouseY < Interface[i].posY + 62 + 20) {
						if (UI === 8 && perso > 0 && perso < 7) { openInterface = 2; }
						if (UI === 8 && perso > 6 && perso < 13) { openInterface = 3; }
					}
				}

			}

			if (Interface[i].id === 11) {
				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
						if (event.id === 1) { openInterface = 5;}
						if (event.id === 2) { openInterface = 6;}
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 101 && mouseY < Interface[i].posY + 101 + 20) {
						endEvent(0);
						openInterface = 7;
					}
				}
			}

			if (Interface[i].id === 12) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 62 && mouseY < Interface[i].posY + 62 + 20) {

						var a = 0;
						for(var p=0; p < Personnage.length; p++){
							if (Personnage[p].select === 1) { a++ }
						}
						if (a > 1) {
							for(var p=0; p < Personnage.length; p++){
								if (Personnage[p].select === 1 && Personnage[p].status === 1) {
									Personnage[p].day = 16;
									Personnage[p].status = 2;
								}
							}
							openInterface = 1;
							endEvent(1);
						}

					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 121 && mouseY < Interface[i].posY + 121 + 20) {
						openInterface = 1;
					}
				}


			}

			if (Interface[i].id === 14) {
				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
						endEvent(1);
						openInterface = 7;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 101 && mouseY < Interface[i].posY + 101 + 20) {
						endEvent(0);
						openInterface = 7;
					}
				}
			}

			if (Interface[i].id === 21) {

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + Interface[i].largeur) {
					if (mouseY > Interface[i].posY && mouseY < Interface[i].posY + Interface[i].hauteur) {
						event.nbr = 0;
					}
				}

			}

		}

	}

	function Random(min, max) {

	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min +1)) + min;

	}

	var event;

	function newEvent() {
		var v = Random(1,4);

		if (v === 1) { eventType1(); }
		if (v === 2) { eventType2(); }
		if (v === 3 || v === 4) { eventType3(); }

		eventDay();
	}

	function eventType1() {

		var ssn = Random(1000,9999);
		var j = Random(1,30);
		if (j < 10) { j = '0' + j; }
		var m = Random(1,12);
		if (m < 10) { m = '0' + m; }
		var a = Random(1980,1998);

		var ad = Random(1,999);
		var add = Random(1,30);

		// ----

		var metiers = ['ARCHITECT','AUTHOR','LAWYER','BAKER','BOXER','JEWELLER','SURGEON','HAIRDRESSER','GRAVEDIGGER','FLORIST','BAILIFF','NURSE','GARDENER','JOURNALIST','JUDGE','MASON','MAGISTRATE','MARINE','ENGINEER','DOCTOR','JOINER','MILITARY','BRICKLAYER','SAILOR','DOCTOR','WOODWORKER','MUSICIAN','NOTARY PUBLIC','OPTICIAN','PAEDIATRICIAN','PAINTER','PHARMACIST','PHOTOGRAPHER','PHYSICIST','PLUMBER','PSYCHIATRIST','PSYCOLOGIST','PASTRY CHEF','PHOTOGRAPHER','PLUMBER','TEACHER','FIREFIGHTER','SECRETARY','WAITER','SCIENTIST','FIRST-AID WORKER','SECRETARY','WAITER','TELEPHONE','OPERATOR','TAILOR','CLEANER','TRADER','TRANSLATOR','CATERER','TREASURER','SELLER','VETERINARIAN','WINEGROWER','WEBMASTER','ZOOLOGISTE'];

		metier = metiers[Math.floor(Math.random()*metiers.length)];

		var etats = ['AUBURN, ALABAMA','SEWARD, ALASKA','TUSCON, ARIZONA','SAN FRANCISCO, CALIFORNIA','DENVER, COLORADO','HARTFORD, CONNECTICUT',,'MIAMI, FLORIDA','ATLANTA, GEORGIA','HONOLULU, HAWAII','BOISE, IDAHO','CHICAGO, ILLINOIS','INDIANAPOLIS, INDIANA','WICHITA, KANSAS','LOUISVILLE, KENTUCKY','LAFAYETTE, LOUISIANA','PORTLAND, MAINE','BALTIMORE, MARYLAND','BOSTON, MASSACHUSETTS','DETROIT, MICHIGAN','SAINT PAUL, MINNESOTA','SPRINGFIELD, MISSOURI','BILLINGS, MONTANA','OMAHA, NEBRASKA','LAS VEGAS, NEVADA','NEWARK, NEW JERSEY','LAS CRUCES, NEW MEXICO','BROOKLYN, NEW YORK','PORTLAND, OREGON','PROVIDENCE, RHODE ISLAND','HOUSTON, TEXAS','RICHMOND, VIRGINIA','MANHATTAN, NEW YORK','MANHATTAN, BROOKS','MANHATTAN, QUEENS'];

		etat = etats[Math.floor(Math.random()*etats.length)];

		var noms = ['SMITH','JOHNSON','WILLIAMS','JONES','BROWN','DAVIS','MILLER','WILSON','MOORE','TAYLOR','ANDERSON','THOMAS','JACKSON','WHITE','HARRIS','MARTIN','THOMPSON','GARCIA','MARTINEZ','ROBINSON','CLARK','RODRIGUEZ','LEWIS','LEE','WALKER','HALL','ALLEN','HERNANDEZ','WRIGHT','LOPEZ','HILL','SCOTT','GREEN','ADAMS','BAKER','GONZALEZ','NELSON','CARTER','MITCHELL','PEREZ','ROBERTS','TURNER','PHILLIPS','CAMPBELL','PARKER','EVANS','EDWARDS','COLLINS','STEWART','SANCHEZ','MORRIS','ROGERS','REED','COOK','MORGAN','BELL','MURPHY','BAILEY','RIVERA','COOPER','RICHARDSON','COX','HOWARD','WARD','TORRES','PETERSON','GRAY','RAMIREZ','JAMES','WATSON','BROOKS','KELLY','SANDERS','PRICE','BENNETT','WOOD','BARNES','ROSS','HENDERSON','COLEMAN','JENKINS','PERRY','POWELL','LONG','PATTERSON','HUGHES','FLORES','BUTLER','SIMMONS','FOSTER'];

		nom = noms[Math.floor(Math.random()*noms.length)];
		// ----

		var sexe = Random(1,2);

		if (sexe === 1) {

			var prenoms = ['MIA','LANA','CHARLIE','AVA','JENNA','TESSA','ALYSSA','TESS','CASSIE','ASHLEY','KAYLA','LEXIE','KELLY','ABBY','JOYCE','LINDSAY','LILLY','CALLIE','SUZIE','LINDA','MADDIE','ARIANA','ROSIE','CHELSEA','LYNN','SARAH','MONICA'];

			prenom = prenoms[Math.floor(Math.random()*prenoms.length)];

			var image = Random(0,allIrrF.length-1);
		} else {

			var prenoms = ['ETHAN','TOM','NOAH','NOLAN','AARON','EVAN','ISAAC','LENNY','JULIAN','CHARLIE','DYLAN','JOSHUA','HAYDEN','WARREN','BRYAN','TONY','WYATT','ELIJAH','LÉNY','JASON','TYLER','MATTHEW','ALAN','ANDY','MARLON','LEWIS','KEVIN','ADRIAN','ZACK','STAN','EZRA','ANDREW','ALLAN','KYLE','JAROD','ELI','ZACHARY','MATT','TYRON','JOEY','TOMMY','JOHN','JONAH','CHRISTIAN','LUKE','DARYL','OLIVER','STEVEN','ALEC','MIKE'];

			prenom = prenoms[Math.floor(Math.random()*prenoms.length)];

			var image = Random(0,allIrrM.length-1);
		}
		// ----

		var car = Random(1,4);

		if (car === 1) {
			var arr = 'MANHATTAN';

			var rues = ['ALLEN ST','BEACH ST','GAY ST','STANTON ST','CHATHAM SQ','WOOSTER ST'];
			rue = rues[Math.floor(Math.random()*rues.length)];
		}
		if (car === 2) {
			var arr = 'BRONX';

			var rues = ['HILLMAN AVE','CORSA AVE','HILLMAN AVE','BARTOW AVE'];
			rue = rues[Math.floor(Math.random()*rues.length)];
		}
		if (car === 3) {
			var arr = 'BROOKLYN';

			var rues = ['ALBEE SQ','CLARK ST','DEKALB AVE','FULTON ST','HERZL ST'];
			rue = rues[Math.floor(Math.random()*rues.length)];
		}
		if (car === 4) {
			var arr = 'QUEENS';

			var rues = ['PARSONS BLVD','STEINWAY ST','SEAN BELL ST'];
			rue = rues[Math.floor(Math.random()*rues.length)];
		}

		var comp1 = Random(1,6);
		var comp2 = Random(1,6);

		if (comp2 === comp1) {
			if (comp2 < 4) { comp2 += 1 } else { comp2 -= 1 }
		}

		var ran = Random(10,30);

		event = {
			id : 1,

			image : image,
			name : nom + ', ' + prenom,
			dob : j + '-' + m + '-' + a,
			ssn : 'xxx-xx-' + ssn,
			pob : etat,
			address1 : ad + ' ' + rue + ', #' + add,
			address2 : arr + ', NY 112' + ran,
			occ : metier,
			sexe : sexe,
			comp1 : comp1,
			comp2 : comp2,

			jauge1 : 'IRRELEVANT',

			jauge1y : -2,
			jauge2y : 0,
			jauge3y : 2,
			jauge4y : 0,
			jauge5y : 0,

			jauge1n : 1,
			jauge2n : 0,
			jauge3n : -2,
			jauge4n : 0,
			jauge5n : 0,
		};

	}

	function eventType2() {

		var comp1 = Random(1,6);
		var comp2 = Random(1,6);

		if (comp2 === comp1) {
			if (comp2 < 4) { comp2 += 1 } else { comp2 -= 1 }
		}

		max = Random(12,49);
			event = {
				id : 2,

				name : '',
				ssn : '',
				occ : '',

				time : Date.now() - 800,
				tick : 800,
				nbr : 0,
				max : max,

				t1 : 'THREAT TO THE NATIONAL SECURITY',
				t2 : 'REVELEVANT NUMBER',

				comp1 : comp1,
				comp2 : comp2,

				jauge1 : 'RELEVANT',

				jauge1y : 0,
				jauge2y : -2,
				jauge3y : 0,
				jauge4y : 2,
				jauge5y : 0,

				jauge1n : 0,
				jauge2n : 1,
				jauge3n : 0,
				jauge4n : -2,
				jauge5n : 0,
			};


	}

	function generate2() {

		var comp1 = Random(1,6);
		var comp2 = Random(1,6);

		if (comp2 === comp1) {
			if (comp2 < 4) { comp2 += 1 } else { comp2 -= 1 }
		}

		var prenoms = ['ETHAN','TOM','NOAH','NOLAN','AARON','EVAN','ISAAC','LENNY','JULIAN','CHARLIE','DYLAN','JOSHUA','HAYDEN','WARREN','BRYAN','TONY','WYATT','ELIJAH','LÉNY','JASON','TYLER','MATTHEW','ALAN','ANDY','MARLON','LEWIS','KEVIN','ADRIAN','ZACK','STAN','EZRA','ANDREW','ALLAN','KYLE','JAROD','ELI','ZACHARY','MATT','TYRON','JOEY','TOMMY','JOHN','JONAH','CHRISTIAN','LUKE','DARYL','OLIVER','STEVEN','ALEC','MIKE','MIA','LANA','CHARLIE','AVA','JENNA','TESSA','ALYSSA','TESS','CASSIE','ASHLEY','KAYLA','LEXIE','KELLY','ABBY','JOYCE','LINDSAY','LILLY','CALLIE','SUZIE','LINDA','MADDIE','ARIANA','ROSIE','CHELSEA','LYNN','SARAH','MONICA'];

		prenom = prenoms[Math.floor(Math.random()*prenoms.length)];

		var metiers = ['ARCHITECT','AUTHOR','LAWYER','BAKER','BOXER','JEWELLER','SURGEON','HAIRDRESSER','GRAVEDIGGER','FLORIST','BAILIFF','NURSE','GARDENER','JOURNALIST','JUDGE','MASON','MAGISTRATE','MARINE','ENGINEER','DOCTOR','JOINER','MILITARY','BRICKLAYER','SAILOR','DOCTOR','WOODWORKER','MUSICIAN','NOTARY PUBLIC','OPTICIAN','PAEDIATRICIAN','PAINTER','PHARMACIST','PHOTOGRAPHER','PHYSICIST','PLUMBER','PSYCHIATRIST','PSYCOLOGIST','PASTRY CHEF','PHOTOGRAPHER','PLUMBER','TEACHER','FIREFIGHTER','SECRETARY','WAITER','SCIENTIST','FIRST-AID WORKER','SECRETARY','WAITER','TELEPHONE','OPERATOR','TAILOR','CLEANER','TRADER','TRANSLATOR','CATERER','TREASURER','SELLER','VETERINARIAN','WINEGROWER','WEBMASTER','ZOOLOGISTE'];

		metier = metiers[Math.floor(Math.random()*metiers.length)];

		var noms = ['SMITH','JOHNSON','WILLIAMS','JONES','BROWN','DAVIS','MILLER','WILSON','MOORE','TAYLOR','ANDERSON','THOMAS','JACKSON','WHITE','HARRIS','MARTIN','THOMPSON','GARCIA','MARTINEZ','ROBINSON','CLARK','RODRIGUEZ','LEWIS','LEE','WALKER','HALL','ALLEN','HERNANDEZ','WRIGHT','LOPEZ','HILL','SCOTT','GREEN','ADAMS','BAKER','GONZALEZ','NELSON','CARTER','MITCHELL','PEREZ','ROBERTS','TURNER','PHILLIPS','CAMPBELL','PARKER','EVANS','EDWARDS','COLLINS','STEWART','SANCHEZ','MORRIS','ROGERS','REED','COOK','MORGAN','BELL','MURPHY','BAILEY','RIVERA','COOPER','RICHARDSON','COX','HOWARD','WARD','TORRES','PETERSON','GRAY','RAMIREZ','JAMES','WATSON','BROOKS','KELLY','SANDERS','PRICE','BENNETT','WOOD','BARNES','ROSS','HENDERSON','COLEMAN','JENKINS','PERRY','POWELL','LONG','PATTERSON','HUGHES','FLORES','BUTLER','SIMMONS','FOSTER'];

		nom = noms[Math.floor(Math.random()*noms.length)];

		var ssn = Random(1000,9999);

		event.name = nom + ', ' + prenom;
		event.ssn = 'XXX-XX-' + ssn;
		event.occ = metier;
	}

	function eventType3() {

		var eve = Random(1,4);

		if (eve === 1) {
			event = {
				id : 3,

				t1 : 'NEW EVENT',
				t2 : 'ENQUETE SUR LE HR',

				l : "Carter récolte des preuves pour faire tomber le HR. \nLa Team Machine doit-elle lui venir en aide ? \nPendant ce temps, personne ne pourra s'occuper des \nnuméros non-pertinent. \nEn revanche cela permettra à l'équipe de se faire un peu \noublier.",

				nbr : 6,

				jauge1y : 1,
				jauge2y : 1,
				jauge3y : -2,
				jauge4y : 0,
				jauge5y : 0,

				jauge1n : 0,
				jauge2n : -2,
				jauge3n : 2,
				jauge4n : 0,
				jauge5n : 0,
			};
		}

		if (eve === 2) {
			event = {
				id : 3,

				t1 : 'NEW EVENT',
				t2 : 'GUERRE DE GANG',

				l : "La tention entre le gang d'Elias et celui des Russes \nne cesse de croitre. Une réglement de compte va avoir \nlieu et risque de faire beaucoup de victimes \nLa team Machine doit-elle intervenir ?",
				nbr : 4,

				jauge1y : -2,
				jauge2y : 2,
				jauge3y : -1,
				jauge4y : 0,
				jauge5y : 0,

				jauge1n : -1,
				jauge2n : 0,
				jauge3n : 1,
				jauge4n : 0,
				jauge5n : 0,
			};
		}

		if (eve === 3) {
			event = {
				id : 3,

				t1 : 'NEW EVENT',
				t2 : 'JOURNALISTE DERANGEANT',

				l : "Un journaliste enquête depuis un moment sur les \nagissements de l'ISA, et risque de révélé des \ninformations comprométentes sur le programme. \nLes agents du gouvernement doivent-ils éliminé cette \npotentiel menace ?",
				nbr : 5,

				jauge1y : 1,
				jauge2y : -2,
				jauge3y : 0,
				jauge4y : 2,
				jauge5y : 0,

				jauge1n : -2,
				jauge2n : 1,
				jauge3n : 0,
				jauge4n : -2,
				jauge5n : 0,
			};
		}

		if (eve === 4) {
			event = {
				id : 3,

				t1 : 'NEW EVENT',
				t2 : 'VACANCE POUR LA TEAM MACHINE',

				l : "Ces derniers temps les numéros ont été très \nnombreux et les Asset de la Machine ont besoin \nde repos. \nLa Team Machine doit-elle prendre quelque jours de \nde vacances ? \nPendant ce temps, personne ne pourra s'occuper des \nnuméros non-pertinent.",

				nbr : 7,

				jauge1y : 2,
				jauge2y : 1,
				jauge3y : -2,
				jauge4y : 0,
				jauge5y : 0,

				jauge1n : -1,
				jauge2n : -2,
				jauge3n : 2,
				jauge4n : 0,
				jauge5n : 0,
			};
		}
	}

	function eventDay() {


		if (dayy === 3562) {

			event = {
				id : 4,

				image : 2,
				t1 : 'GET CARTER',
				t2 : 'NEW ASSET',

				l : "Le détective Carter a finalement été recruté par\nReese et Harold.\nIl s'agit donc d'un nouvel Asset pour aider à\ns'occuper des numéros non-pertinent.",
				nbr : 4,

				c1 : 'N',

				jauge1y : 0,
				jauge2y : 0,
				jauge3y : 2,
				jauge4y : 0,
				jauge5y : 0,

				jauge1n : 0,
				jauge2n : 0,
				jauge3n : 2,
				jauge4n : 0,
				jauge5n : 0,

				suite : 1,
				v1 : 4,
			};

			for(var i=0; i < Personnage.length; i++){
				if (Personnage[i].id === 4) { Personnage[i].status = 1; }
			}

		}

		if (dayy === 3570) {

			event = {
				id : 4,

				image : 3,
				t1 : 'PERTINENCE',
				t2 : 'NEW ASSET',

				l : "Shaw, jusque maintenant agent pour l'ISA,\nva progressivement être recruté par l'équipe.\nIl s'agit donc d'un nouvel Asset pour aider à\ns'occuper des numéros non-pertinent.",
				nbr : 4,

				c1 : 'N',

				jauge1y : 0,
				jauge2y : 0,
				jauge3y : 2,
				jauge4y : 0,
				jauge5y : 0,

				jauge1n : 0,
				jauge2n : 0,
				jauge3n : 2,
				jauge4n : 0,
				jauge5n : 0,

				suite : 1,
				v1 : 5,
			};

			for(var i=0; i < Personnage.length; i++){
				if (Personnage[i].id === 5) { Personnage[i].status = 1; }
				if (Personnage[i].id === 7) { Personnage[i].status = 4; }
			}

		}

		if (dayy === 3578) {

			event = {
				id : 4,

				image : 4,
				t1 : 'GOD MODE',
				t2 : 'NEW ASSET',

				l : "La Machine a désigné Root comme son\n'Analog Interface'. Les missions qui lui\nseront attribué concerneront la cathégorie\n'Thertiary-Operation'.",
				l10 : 0,
				nbr : 4,

				c1 : 'N',

				jauge1y : 0,
				jauge2y : 0,
				jauge3y : 0,
				jauge4y : 0,
				jauge5y : 2,

				jauge1n : 0,
				jauge2n : 0,
				jauge3n : 0,
				jauge4n : 0,
				jauge5n : 2,

				suite : 1,
				v1 : 6,
			};

			for(var i=0; i < Personnage.length; i++){
				if (Personnage[i].id === 6) { Personnage[i].status = 1; }
			}

		}

		if (dayy === 3586) {

			event = {
				id : 4,

				image : 1,
				t1 : 'DEATH BENEFIT',
				t2 : 'KILL MC-COURT ?',

				l : "La mort du sénateur McCourt empêchera la\nlégislation de Samaritain de passer au Congrès.\n\nReese doit-il le tuer ?",
				nbr : 4,

				c1 : 'KILL MC-COURT',
				c2 : 'KILL',
				c3 : 'SAVE MC-COURT',
				c4 : 'SAVE',

				jauge1y : 0,
				jauge2y : -2,
				jauge3y : 0,
				jauge4y : 0,
				jauge5y : 2,

				jauge1n : 0,
				jauge2n : 2,
				jauge3n : 0,
				jauge4n : 0,
				jauge5n : -2,

				suite : 2,
				v1 : "La mort du sénateur McCourt ne fait\nque retardé l'arrivé inévitable de\nSamaritain, ce qui laisse cependant à \nl'équipe plus de temps pour s'y préparé. \nEn revanche, Harold sera indisponnible \npendant toute cette periode.",
				v2 : 188,
				v3 : 'N',
				v4 : 'N',
			};

		}

	}

	function endEvent(r) {

		Save();

		if (event.id === 5) {

			PlusDay();
			newEvent();

		} else {

			if (r === 1) {

				if (event.id === 1 || event.id === 2) {

					a = 0;
					b = 0;

					for(var i=0; i < Personnage.length; i++){
						if (Personnage[i].select === 1) {

							Personnage[i].select = 0;
							if (event.comp1 === 1 && Personnage[i].stat1 > a) { a = Personnage[i].stat1}
							if (event.comp1 === 2 && Personnage[i].stat2 > a) { a = Personnage[i].stat2}
							if (event.comp1 === 3 && Personnage[i].stat3 > a) { a = Personnage[i].stat3}
							if (event.comp1 === 4 && Personnage[i].stat4 > a) { a = Personnage[i].stat4}
							if (event.comp1 === 5 && Personnage[i].stat5 > a) { a = Personnage[i].stat5}
							if (event.comp1 === 6 && Personnage[i].stat6 > a) { a = Personnage[i].stat6}

							if (event.comp2 === 1 && Personnage[i].stat1 > b) { b = Personnage[i].stat1}
							if (event.comp2 === 2 && Personnage[i].stat2 > b) { b = Personnage[i].stat2}
							if (event.comp2 === 3 && Personnage[i].stat3 > b) { b = Personnage[i].stat3}
							if (event.comp2 === 4 && Personnage[i].stat4 > b) { b = Personnage[i].stat4}
							if (event.comp2 === 5 && Personnage[i].stat5 > b) { b = Personnage[i].stat5}
							if (event.comp2 === 6 && Personnage[i].stat6 > b) { b = Personnage[i].stat6}


						}
					}

					if (event.id === 1) { event.jauge3y = a + b; }
					if (event.id === 2) { event.jauge4y = a + b; }
				}

				j1 = jauge1 + 25 * event.jauge1y;
				j2 = jauge2 + 25 * event.jauge2y;
				j3 = jauge3 + 25 * event.jauge3y;
				j4 = jauge4 + 25 * event.jauge4y;
				j5 = jauge5 + 25 * event.jauge5y;

			} else {
				j1 = jauge1 + 25 * event.jauge1n;
				j2 = jauge2 + 25 * event.jauge2n;
				j3 = jauge3 + 25 * event.jauge3n;
				j4 = jauge4 + 25 * event.jauge4n;
				j5 = jauge5 + 25 * event.jauge5n;
			}

			if (j1 < 0) { j1 = 0; }
			if (j1 > 255) { j1 = 250; }

			if (j2 < 0) { j2 = 0; }
			if (j2 > 255) { j2 = 250; }

			if (j3 < 0) { j3 = 0; }
			if (j3 > 255) { j3 = 250; }

			if (j4 < 0) { j4 = 0; }
			if (j4 > 255) { j4 = 250; }

			if (j5 < 0) { j5 = 0; }
			if (j5 > 255) { j5 = 250; }

			if (event.id === 4 && event.suite !== 0) {

				if (event.suite === 2) {

					if (r === 1) {

						if (event.v1 !== 'N') {
							event.id = 5;
						} else {
							PlusDay();
							newEvent();
						}

					} else {

						if (event.v3 !== 'N') {
							event.suite = 3;
							event.id = 5;
						} else {
							PlusDay();
							newEvent();
						}

					}

				} else {
					event.id = 5;
				}

			} else {
				PlusDay();
				newEvent();
			}

		}
	};

	function PlusDay() {
		dayy += 4;
		for(var i=0; i < Personnage.length; i++){
			Personnage[i].day -= 4;
			if (Personnage[i].day < 0) { Personnage[i].day = 0;}
			if (Personnage[i].status === 2 && Personnage[i].day === 0) { Personnage[i].status = 1;}
		}
	}
	// ----

	PersoMaj();
	newEvent();

	function draw() {
		start=1;


	if (start === 1) {

		if (goo === 1) {
			UI8(1)
			goo += 1;
		}

		textFont(fontRegular);

		// ----

		if (playing === false) {
			son1.volume(0.55);
			son1.loop();
		} else {
			son1.stop();
		}
		// noStroke();
		// fill(0);
		// rect(0, 0, window.innerWidth, window.innerHeight);
		image(img0, 0, 0, window.innerWidth, window.innerHeight);


		// ----

		if (openInterface === 1) {

			Interface = [];
			UI = 1;

			UI0(UIbase);
			UIbase = 0;

			UI1(1);

			openInterface = 0;
		}

		if (openInterface === 2) {
			Interface = [];
			UI = 2;
			UI0(UIbase);

			UI2();

			openInterface = 0;
		}

		if (openInterface === 3) {
			Interface = [];
			UI = 3;
			UI0(UIbase);

			UI3();

			openInterface = 0;
		}

		if (openInterface === 4) {
			Interface = [];
			UI = 4;
			UI0(UIbase);

			UI4();

			openInterface = 0;
		}

		if (openInterface === 5) {
			Interface = [];
			UI = 5;
			UI0(UIbase);

			UI2();
			UI5();

			openInterface = 0;
		}

		if (openInterface === 6) {
			Interface = [];
			UI = 6;
			UI0(UIbase);

			UI3();
			UI6();

			openInterface = 0;
		}

		if (openInterface === 7) {
			Interface = [];
			UI = 1;
			UI0(UIbase);

			UI1(0);

			openInterface = 0;
		}

		if (openInterface === 8) {
			Interface = [];
			UI = 8;
			UI0(UIbase);

			s1 = 0;
			s2 = 0;
			s3 = 0;
			s4 = 0;
			s5 = 0;
			s6 = 0;

			UI8(0);
			openInterface = 0;
		}

		// ----

		var wow = 0;
		alt = 0;
		for(var i=0; i < Interface.length; i++){

			if (Interface[i].id === 11) {
				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
						alt = 1;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 101 && mouseY < Interface[i].posY + 101 + 20) {
						alt = 2;
					}
				}
			}

			if (Interface[i].id === 17) {

				if (event.id !== 5) {
					if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
						if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
							alt = 1;
						}
					}
				}
			}

			if (Interface[i].id === 14) {
				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 42 && mouseY < Interface[i].posY + 42 + 20) {
						alt = 1;
					}
				}

				if (mouseX > Interface[i].posX + 8 && mouseX < Interface[i].posX + 8 + 214) {
					if (mouseY > Interface[i].posY + 101 && mouseY < Interface[i].posY + 101 + 20) {
						alt = 2;
					}
				}
			}

			if (Interface[i].moove !== 2) {

				if (mouseIsPressed) {

					if (mouseButton === CENTER) {
						if (mouseX > Interface[i].posX && mouseX < Interface[i].posX + Interface[i].largeur) {
							if (mouseY > Interface[i].posY && mouseY < Interface[i].posY + 15) {
								Interface.splice(i,1);
								break;
							}
						}
					}

					if (wow === 0) {

						if (mouseX > Interface[i].posX && mouseX < Interface[i].posX + Interface[i].largeur) {
							if (mouseY > Interface[i].posY && mouseY < Interface[i].posY + 15) {
								Interface[i].moove = 1;
								wow = 1;
							}
						}

						if (Interface[i].moove === 1) {
							Interface[i].posX = mouseX - Interface[i].largeur / 2;
							Interface[i].posY = mouseY - 15 / 2;
							break;
						}

					}

				} else {
					Interface[i].moove = 0;
				}
			}
		}

		// ----


		pause = 0;
		for(var i=0; i < Interface.length; i++){

			drawInterface(Interface[i].open, Interface[i].ani, Interface[i].posX, Interface[i].posY, Interface[i].largeur, Interface[i].hauteur,Interface[i].alert,Interface[i].t1, Interface[i].ct1,Interface[i].t2, Interface[i].id, Interface[i].var1, Interface[i].var2, Interface[i].var3, Interface[i].var4, Interface[i].var5, Interface[i].var6, i);

		}

		if (pause === 0) {

			for(var i=0; i < allVid.length; i++){
				allVid[i].pause();
			}

			playing = false;
		}

		if (UI === 1) {

			if (event.id === 1) {

				stroke(255);
				strokeWeight(ec);
				fill(255);

				line(event.x1,event.y1,event.x2,event.y2);
				line(event.x3,event.y3,event.x4,event.y4);
			}

			if (event.id === 2) {

				stroke(255);
				strokeWeight(ec);
				fill(255);

				line(event.x1,event.y1,event.x2,event.y2);
				line(event.x3,event.y3,event.x4,event.y4);
			}

			if (event.id === 3) {

				stroke(255);
				strokeWeight(ec);
				fill(255);

				line(event.x1,event.y1,event.x2,event.y2);
			}

			if (event.id === 4) {

				stroke(255);
				strokeWeight(ec);
				fill(255);
				line(event.x1,event.y1,event.x2,event.y2);
				line(event.x3,event.y3,event.x4,event.y4);
			}
		}
	}
	}
