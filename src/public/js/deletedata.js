async function deleteUser(event) {
    const tbody = document.getElementById('tblrow')
    const selectedRows = [...tbody.children].filter(tr => tr.children[0].firstChild.checked)
    const dataToDelete = [];
    for (let i = 0; i < selectedRows.length; i++) {
      const first_name = selectedRows[i].children[1].textContent;
      const last_name = selectedRows[i].children[2].textContent;
      const email = selectedRows[i].children[3].textContent;
      const objData = {first_name: first_name, last_name: last_name, email: email}
      dataToDelete.push(objData);
    }
    const stringifiedDataForDump = JSON.stringify(dataToDelete);
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/delete-user-data')
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onload = async function () {
        if (xhr.status === 200) {
            console.log('OK');
            window.location.href = '/receiver-list'
        }
        else {
            window.alert('Error: ' + xhr.statusText);
        }
    };
    xhr.send(stringifiedDataForDump);
}