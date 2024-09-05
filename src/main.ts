import "./style.css";

function AreaDeCirculo (r:number):number {
    return 2*Math.PI*r**2;
};

const area : number = AreaDeCirculo(2);
console.log(area);

const areaDelCuadrado = (l:number):number => {
    return l**2;
};

const area2 = areaDelCuadrado(2);

console.log(area2);

//Truquito

const areaOp = (x:number):number => 2*x*Math.PI**19;

const areaNerfeo = areaOp(0.00000000000001);

console.log(areaNerfeo);