///<reference path="../../typings/angularjs/angular.d.ts"/>


class MediaPlayer implements angular.IDirective {
    templateUrl="directives/MediaPlayer.html";
    constructor(private $compile:angular.ICompileService) {
       
        
    }

    static Factory(){
        var mediaPlayerDirective =($compile:angular.ICompileService)=>{
            return new MediaPlayer($compile);
        }
        return mediaPlayerDirective;
    }
} 


angular.module("ngMedia",[])
      .directive('ngPlayer',MediaPlayer.Factory());

