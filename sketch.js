var img;

function preload(){
    img = loadImage("jcole(2).jpg");
} 

function setup(){
    createCanvas(img.width,img.height);
    background(0);
}


function draw(){
    image(img, 0, 0);
    loadPixels();
    
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
           var index = (col + row * width) * 4;
           
           var r= pixels[index];
           var g= pixels[index + 1];
           var b= pixels[index + 2]; 
           var a= pixels[index + 3];
           
           if(keyIsPressed){
               if(key=="1")
               pink_filter(index,r,g,b,a) ;
           }
           if(keyIsPressed){
               if(key=="2")
               swap(index, r,g,b,a);
           }
           if(keyIsPressed){
               if(key=="3")
               light_bright(index, r,g,b,a);
           }
           if(keyIsPressed){
                if(key=="4")
                gray_filter(index, r,g,b,a);
           }
           if(keyIsPressed){
                if(key=="5")
                vibrance_filter(index, r,g,b,a,row,col);
           }
           if(keyIsPressed){
               if(key=="6")
               divide (index ,r,g,b,a);
           }
           if(keyIsPressed){
               if(key=="7")
               rgb(index, r,g,b,a);
           }
           if(keyIsPressed){
               if(key=="8")
               zania_filter(index, r,g,b,a,row,col);
           }
           if(keyIsPressed){
               if(key=="9")
               zero(index, r,g,b,a);
           }
        }
    }

   updatePixels();
}

function pink_filter(index, r,g,b,a){
    pixels[index] = 255; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = 255; //blue
    pixels[index + 3] = 255; //alpha
}


function swap(index, r,g,b,a){
    pixels[index] = r; //red
    pixels[index + 1] = b; //green
    pixels[index + 2] = g; //blue
    pixels[index + 3] = a; //alpha
}

function light_bright(index, r,g,b,a){
    pixels[index] = r*2; //red
    pixels[index + 1] = g*2; //green
    pixels[index + 2] = b*2; //blue
    pixels[index + 3] = a; //alpha
}

function gray_filter(index, r,g,b,a){
    pixels[index] = b; //red
    pixels[index + 1] = b; //green
    pixels[index + 2] = b; //blue
    pixels[index + 3] = a; //alpha
}

function vibrance_filter(index, r,g,b,a,row,col){
    pixels[index] = r*1.50+col*.1; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = b+row*.5-100; //blue
    pixels[index + 3] = a; //alpha
}

function divide (index ,r,g,b,a){
    pixels[index] = r/2; //red
    pixels[index + 1] = g/2; //green
    pixels[index + 2] = b/2; //blue
    pixels[index + 3] = a; //alpha
}

function rgb(index, r,g,b,a){
    pixels[index] = 255 - r; //red
    pixels[index + 1] = 255 - g; //green
    pixels[index + 2] = 255 - b; //blue
    pixels[index + 3] = a; //alpha
}

function zania_filter(index,r,g,b,a,row,col){
    pixels[index] = r + row - 190; //red
    pixels[index + 1] = g + col -190; //green
    pixels[index + 2] = b; //blue
    pixels[index + 3] = a; //alpha
}

function zero(index, r,g,b,a){
    pixels[index] = 0; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = b; //blue
    pixels[index + 3] = a; //alpha
}