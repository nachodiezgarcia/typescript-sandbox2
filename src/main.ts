import "./style.css";

function AreaDeCirculo (r:number):number {
    return 2*Math.PI*r**2;
};

const area : number = AreaDeCirculo("Pep GUARDIOLA");
console.log(area);