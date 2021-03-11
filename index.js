var piedra = 0;
var papel = 0;
var tijera = 0;

var opcionUsario;
var OpcionMaquina = papel;

opcionUsario = prompt("¿Que eliges?\npiedra: 0\npapel: 1\ntijera: 2", 0);

if(opcionUsario == piedra)
{ 
    alert("Eligistes Piedra");
    if(OpcionMaquina == piedra)
    { 
        alert("Empate");
  }
  else if(OpcionMaquina == papel)
  { 
      alert("Perdistes")
}
else if(OpcionMaquina == tijera)
{ 
    alert("Ganastes")
}

else if(opcionUsario == piedra)
{ 
    alert("Eligistes piedra");
    if(OpcionMaquina == papel)
    { 
        alert("empante : ");
  }
  else if(OpcionMaquina == papel)
  { 
      alert("perdistes :(");
}
else if(OpcionMaquina == tijera)
{ 
    alert("ganastes");
    }

}
else if(opcionUsario == tijera)
{ 
    alert("Eligistes tijera"); 
    if(OpcionMaquina == piedra)
    { 
        alert("perdistes");
  }
  else if(OpcionMaquina == papel)
  { 
      alert("ganastes");
}
else if(OpcionMaquina == tijera)
{
    alert(empante);

  } 
else
{
    alert ("que paso");
} 

} 
} 
