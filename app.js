class App
{

    Bomen(g,x,y)
    {
    g.beginPath()
    g.fillStyle = "green";
    g.moveTo(x+140,y+90); 
    g.lineTo(x+160,y+100); 
    g.lineTo(x+120,y+100); 
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath()
    g.fillStyle = "brown";
    g.moveTo(x+130,y+130); // rood vierkant
    g.lineTo(x+150,y+130);
    g.lineTo(x+150,y+100)
    g.lineTo(x+130,y+100)
    g.closePath();
    g.stroke();
    g.fill();

    }


    Huisbouwen2(g,x,y)
    {
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+130,y+110); // rood vierkant
        g.lineTo(x+170,y+120); // rood vierkant
        g.lineTo(x+160,y+140); // rood vierkant
        g.lineTo(x+120,y+130); // rood vierkant
        g.lineTo(x+130,y+110); // rood vierkant
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+170,y+120); // driehoek
        g.lineTo(x+185,y+130); // driehoek
        g.lineTo(x+160,y+140); // driehoek
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+120,y+130);
        g.lineTo(x+120,y+160);
        g.lineTo(x+160,y+170);
        g.lineTo(x+160,y+140);
        g.lineTo(x+120,y+130);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+160,y+140);
        g.lineTo(x+160,y+170);
        g.lineTo(x+185,y+160);
        g.lineTo(x+185,y+130);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x+125,y+147);
        g.lineTo(x+125,y+162);
        g.lineTo(x+140,y+165);
        g.lineTo(x+140,y+152);
        g.lineTo(x+140,y+150);
        g.closePath();
        g.stroke();
        g.fill();

    }
    
    
    Huisbouwen(g,x,y)
    {   
        

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+30,y+10); 
        g.lineTo(x+70,y+20); 
        g.lineTo(x+60,y+40); 
        g.lineTo(x+20,y+30); 
        g.lineTo(x+30,y+10); 
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x+70,y+20); // driehoek
        g.lineTo(x+85,y+30); // driehoek
        g.lineTo(x+60,y+40); // driehoek
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+20,y+30);
        g.lineTo(x+20,y+60);
        g.lineTo(x+60,y+70);
        g.lineTo(x+60,y+40);
        g.lineTo(x+20,y+30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+60,y+40);
        g.lineTo(x+60,y+70);
        g.lineTo(x+85,y+60);
        g.lineTo(x+85,y+30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x+65,y+55);
        g.lineTo(x+65,y+68);
        g.lineTo(x+70,y+66);
        g.lineTo(x+70,y+53);
        g.lineTo(x+65,y+55);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(x+25,y+45);
        g.lineTo(x+40,y+48);
        g.lineTo(x+40,y+55);
        g.lineTo(x+25,y+52)
        g.closePath();
        g.stroke();
        g.fill();
        
    }
    runApplication()
    {
        console.log("Hello World!");
        //code gaat hier onder!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        this.Huisbouwen(g,30,10)
        this.Huisbouwen2(g,165,-79)
        this.Huisbouwen2(g,206,-69)
        this.Huisbouwen(g,1,22)
        this.Huisbouwen2(g,58,-89)
        this.Huisbouwen(g,10,120)
        this.Huisbouwen2(g,-10,21)
        this.Huisbouwen2(g,-8,-89)
        this.Huisbouwen2(g,99,-79)
        this.Huisbouwen2(g,190,70)
        this.Huisbouwen(g,10,270)
        this.Huisbouwen2(g,190,160)
        this.Huisbouwen(g,150,250)
        this.Bomen(g,280,-30)
        this.Bomen(g,320,-30)
        this.Bomen(g,280,100)
        this.Bomen(g,330,100)
        this.Bomen(g,260,50)
        this.Bomen(g,100,50)
        this.Bomen(g,150,50)
        this.Bomen(g,300,20)
        this.Bomen(g,120,90)
        this.Bomen(g,70,90)
        this.Bomen(g,-100,120)
        this.Bomen(g,30,120)
        this.Bomen(g,130,180)
        this.Bomen(g,-30,150)
        this.Bomen(g,300,220)
        this.Bomen(g,270,160)


        g.font = "60px Sans-Serif";

        g.fillText("Fijne vakantie", 30, 400)



        console.log(canvas)
    }
}

let app = new App();
app.runApplication();