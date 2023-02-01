
var listaFilmes = [
  'https://th.bing.com/th/id/OIP.nQOfn9T18Oik8LSTKQYNCwAAAA?pid=ImgDet&w=207&h=296&c=7',
  'https://http2.mlstatic.com/filme-a-chegada-formato-digital-hd-D_NQ_NP_764442-MLB29011913596_122018-F.jpg',
  'https://th.bing.com/th/id/OIP.B9zfeUrjM5v0GUQcXjARCwHaLH?pid=ImgDet&w=204&h=306&c=7',
  'https://th.bing.com/th/id/OIP.Pyi5TpwoqE1YaF1s6KHy4gHaLH?pid=ImgDet&w=204&h=306&c=7',
  'https://image.tmdb.org/t/p/w500/4RIr8hGts84JLZ8f2EoeYh4uk7.jpg'
] 

for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<img src= ' + listaFilmes[i] + '>');
}

