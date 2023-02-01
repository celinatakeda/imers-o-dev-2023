var listaFilmes = []

listaFilmes[0] = 'https://th.bing.com/th/id/OIP.XTiah15THsjODxIlYYdQrwAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7'

listaFilmes[1] = 'https://http2.mlstatic.com/filme-a-chegada-formato-digital-hd-D_NQ_NP_764442-MLB29011913596_122018-F.jpg'

listaFilmes[2] = 'https://2.bp.blogspot.com/-fR5CGHvrvMg/XDu29X_rwsI/AAAAAAAAGJ8/uHSQAgF8PZwX_tsoMvnhqfi549Bi_N0QwCLcBGAs/s1600/aranhaverso.jpg'

for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<img src= ' + listaFilmes[i] + '>');
}

