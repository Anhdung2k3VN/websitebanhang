console.log('test');

Show_info();
buttonsearchbranch();
show_Map();
function Show_info() {
  let valueoutput = '<option value="0">Chọn tỉnh, thành phố</option>';
  city.forEach((valuecity) => {
    valueoutput += ` <option value="${valuecity.id}" class="js-city">${valuecity.city}</option>`;
  });
  document.querySelector('.option-city').innerHTML = valueoutput;
  let valueshow = findbranch();
  document.querySelector('.js-find-branch').innerHTML = `Tìm thấy ${valueshow.count} cửa hàng`;
  document.querySelector('.js-find-branch-add-branch').innerHTML = `${valueshow.outputHTML}`;

}
function selectdistrict(event) {
  value = event.target.value;
  let valueoutput = '<option value="0">Chọn quận, huyện</option>';
  district.forEach((valuedistrict) => {
    if (valuedistrict.idcity == value) {
      valueoutput += `<option value="${valuedistrict.iddistrict}">${valuedistrict.district}</option>`;
    }
  });
  console.log(valueoutput);
  document.querySelector('.js-district-add').innerHTML = valueoutput;

}
function findbranch() {
  let count = 0;
  let output = {
    count: 0,
    outputHTML: ''
  };

  valuecity = document.getElementById('option-city-select').value;
  valuedistrict = document.getElementById('option-district-select').value;
  if (valuecity == 0) {
    branch.forEach((value) => {
      output.count++;
      output.outputHTML += ` <div class="find-branch-right-row">
                <div class="find-branch-right-box-input">
                  <input type="radio" id="${value.idbranch}" name="name-inputmap"  class="input-map-js">
                  <label for=""></label>
                </div>
                <div class="find-branch-right-box-right">
                  <p class="find-branch-right-address-strong">${value.address}</p>
                  <p class="find-branch-right-address">${value.address}</p>
                  <p class="find-branch-right-hotline">${value.hotline}</p>
                </div>

              </div>`;
      // branchoutput += `test +${count}`;
      // console.log('hi');
    });
  }
  else if (valuedistrict == 0) {
    count = 0;
    branch.forEach((value) => {
      if (value.idcity == valuecity) {
        output.count++;
        output.outputHTML += ` <div class="find-branch-right-row">
                <div class="find-branch-right-box-input">
                <input type="radio" id="${value.idbranch}" name="name-inputmap"  class="input-map-js">
                  <label for=""></label>
                </div>
                <div class="find-branch-right-box-right">
                  <p class="find-branch-right-address-strong">${value.address}</p>
                  <p class="find-branch-right-address">${value.address}</p>
                  <p class="find-branch-right-hotline">${value.hotline}</p>
                </div>

              </div>`;
      }

    });
  }


  else {
    branch.forEach((value) => {
      if ((value.idcity == valuecity) && (value.iddistrict == valuedistrict)) {
        // console.log(`value.idcity=${value.idcity} valuecity=${valuecity} value.iddistrict=${value.iddistrict} valuedistrict=${valuedistrict}`)
        // console.log('test địa chỉ');
        output.count++;
        output.outputHTML += ` <div class="find-branch-right-row">
                <div class="find-branch-right-box-input">
                  <input type="radio" id="${value.idbranch}" name="name-inputmap" class="input-map-js">
                  <label for="" id="${value.idbranch}"></label>
                </div>
                <div class="find-branch-right-box-right">
                  <p class="find-branch-right-address-strong">${value.address}</p>
                  <p class="find-branch-right-address">${value.address}</p>
                  <p class="find-branch-right-hotline">${value.hotline}</p>
                </div>

              </div>`;
      }
    });
  }

  return output;
}
function buttonsearchbranch() {
  let count = 0;
  let branchoutput = '';
  document.querySelector('.js-select-button-search').addEventListener('click', () => {
    valueshow = findbranch();
    console.log(valueshow.outputHTML);
    document.querySelector('.js-find-branch').innerHTML = `Tìm thấy ${valueshow.count} cửa hàng`;
    document.querySelector('.js-find-branch-add-branch').innerHTML = `${valueshow.outputHTML}`;

  });

}
function show_Map() {
  console.log("hihi");
  document.querySelectorAll('.input-map-js').forEach((value) => {
    value.addEventListener('click', () => {
      console.log(value.id);
      branch.forEach((valuebranch) => {
        if (valuebranch.idbranch == value.id) {
          document.querySelector('.js-find-branch-add-map').innerHTML = `            <iframe
              src="${valuebranch.mapbranch}"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }
      });
    });
  });


}

// ------------------------------------------------------------------------------------------------------------
// collection

