// import peasy.*;

// PeasyCam cam;
// let globe;
// let total = 10;
let angle= 0;
let beta = 0;
let inc = 0.03;
let numTextures = 15;
var crowdTexture1, crowdTexture2, crowdTexture3, crowdTexture4, crowdTexture5,crowdTexture6, crowdTexture7, crowdTexture8, crowdTexture9, crowdTexture10, crowdTexture11, crowdTexture12, crowdTexture13, crowdTexture14, crowdTexture15;
var crowdTextures=[];
var vectors = [];
var negZ = -50;
var zDirection = 1;


function preload() {
	    crowdTexture1 = loadImage("smalls/iran-rev-crowd1-300.jpg");
    crowdTexture2 = loadImage("smalls/Crowd_Moocs-300.jpg");
    crowdTexture3 = loadImage("smalls/558641-300.jpg");
    crowdTexture4 = loadImage("smalls/tahr-300.jpg");
    crowdTexture5 = loadImage("smalls/rr-300.jpg");
    crowdTexture6 = loadImage("smalls/141.jpg");
    crowdTexture7 = loadImage("smalls/article.jpg");
    crowdTexture8 = loadImage("smalls/image.jpg");
    crowdTexture9 = loadImage("smalls/happycrowd.jpg");
    crowdTexture10 = loadImage("smalls/img.jpg");
    crowdTexture11 = loadImage("smalls/BN-SC916.jpg");
    crowdTexture12 = loadImage("smalls/images.jpg");
    crowdTexture13 = loadImage("smalls/images-1.jpg");
    crowdTexture14 = loadImage("smalls/headline.jpg");
    crowdTexture15 = loadImage("smalls/Nehemiah.jpg");
}



function setup() {
	createCanvas(1200,800,WEBGL);
  	//cam = new PeasyCam(this, 500);
  	  //colorMode(HSB);
	// globe = make2Darray(total+20, total+20);
	//frameRate(15);
		 crowdTextures = [crowdTexture1,crowdTexture2,crowdTexture3,crowdTexture4,crowdTexture5,crowdTexture6,crowdTexture7,crowdTexture8,crowdTexture9,crowdTexture10,crowdTexture11,crowdTexture12,crowdTexture13,crowdTexture14,crowdTexture15];

}

function draw() {
	 // background(random(120));
	 background(20)
 	// noStroke();
 	 ambientLight(100, 120,100);
 	// ambientLight(255);
	 directionalLight(5,20,100,0,0,1);
	 directionalLight(5,100,0,1,0,0);
	 directionalLight(200,0,0,0,1,0);


	rotateX(angle/3);
	rotateZ(angle/6);
	angle+=inc;
	scale(0.6);
	translate(0,0,negZ);



	if(negZ > 1000 || negZ < -1000) {zDirection *= -1};

	negZ+=50*zDirection;


	let r = 100 * (0.8 + 1.6 * sin(2*beta));
	let theta  = 2 * beta;
	let phi = 0.6 * PI * sin(3 * beta);
	let x = r/3 * cos(phi) * cos(theta);
	let y = r/3 * cos(phi) * sin(theta);
	let z = r/3 * sin(phi);
	
	vectors.push(createVector(x,y,z));
	beta +=0.01;
	//noFill();
	//stroke(255);
	//ambientMaterial(100,r,random(255));
	//fill(100,0,100);
	//normalMaterial();
	//strokeWeight(30);
	//normalMaterial();
	
	beginShape();
	
	vectors.forEach(function(vector,index){
		texture(crowdTextures[index%15]);	
		translate(vector.x,vector.y,vector.z);
		//ambientMaterial(100,r,random(255));
		//sphere(r*random(5,5.5));
		//sphere(r);
		sphere(r*100);
	});
	endShape(CLOSE);

}