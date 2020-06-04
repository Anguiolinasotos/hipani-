function Frame__0_1(ID){
StackTrace="Scene 1 Frame 1";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function Frame__2_0(ID){
StackTrace="Scene 3 Frame 0";
Pause();

}

function Frame__3_0(ID){
StackTrace="Scene 4 Frame 0";
Pause();


}

function Button1_OnClick(){
StackTrace="Button1.On Click";
GotoSceneNameAndPlay("Scene2",1);
}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("Scene3",1);

}

function Button3_OnClick(){
StackTrace="Button3.On Click";
GotoSceneNameAndPlay("Scene4",1);

}

function abrirtoodle_OnClick(){
StackTrace="abrir toodle.On Click";
TimelineGotoAndPlay("Angui",0);

}

function abrirtoodle_OnRelease(){
StackTrace="abrir toodle.On Release";


}

function Button4_OnClick(){
StackTrace="Button4.On Click";
GotoSceneNameAndPlay("Scene1",0);
ToggleButtonRelease("1");
TimelineGotoAndStop("Angui",0);
}

function animacion_OnClick(){
StackTrace="animacion.On Click";
TimelinePlay("moneda");
}

function animacion_OnRelease(){
StackTrace="animacion.On Release";
TimelineStop("moneda");

}

function Button5scene3_OnClick(){
StackTrace="Button5 scene 3.On Click";
GotoSceneNameAndPlay("Scene1",0);
ToggleButtonRelease("1");
TimelineGotoAndStop("Angui",0);

}

function back_OnClick(){
StackTrace="back.On Click";
ImageViewerPrevious("Visor");
}

function next_OnClick(){
StackTrace="next.On Click";
ImageViewerNext("Visor");

}

function Button6_OnClick(){
StackTrace="Button6.On Click";
GotoSceneNameAndPlay("Scene1",0);
ToggleButtonRelease("1");
TimelineGotoAndStop("Angui",0);

}

