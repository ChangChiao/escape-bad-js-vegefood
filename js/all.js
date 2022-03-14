// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data = [];

const table = document.querySelector('.table-content');
const renderData = (paramArray) => {
  let str = '';
  paramArray.forEach((item) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符)
    const {
      作物名稱, 市場名稱, 上價, 中價, 下價, 平均價, 交易量,
    } = item;
    const content = `<tr>
        <td> 
          ${作物名稱}
        </td>
        <td> 
          ${市場名稱}
        </td>
        <td> 
          ${上價}
        </td>
        <td> 
          ${中價}
        </td>
        <td> 
          ${下價}
        </td>
        <td> 
          ${平均價}
        </td>
        <td> 
          ${交易量}
        </td>
      </tr>`;

    str += content;
  });
  table.innerHTML = str;
};

/* global axios */
axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  // TODO: 之後拆成 renderData 函式
  renderData(data);
});

const filterCategory = (e) => {
  if (e.target.nodeName !== 'BUTTON') return;
  const { category } = e.target.dataset;
  const showData = data.filter((i) => i.種類代碼 === category);
  // TODO: 之後拆成 renderData 函式
  renderData(showData);
};

const filter = document.querySelector('.filter');
filter.addEventListener('click', filterCategory);
