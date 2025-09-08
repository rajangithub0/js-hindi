const insert = document.getElementById("insert");


window.addEventListener('keypress', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    </div>`
})