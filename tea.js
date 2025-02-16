var stage = new createjs.Stage("myCanvas");
      var w = stage.canvas.width;
      var h = stage.canvas.height;

      var text = new createjs.Text(
          "the longer I'm with you\nthe more I love you", 
          "bold 24px Arial", "#fff"
      );
      text.textAlign = "center";
      text.x = w / 2;
      text.y = h / 2 - text.getMeasuredLineHeight() / 2;

      stage.addChild(text);
      stage.update();
