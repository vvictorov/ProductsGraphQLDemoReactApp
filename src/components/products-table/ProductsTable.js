import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './products-table.module.css';
import MUIDataTable from "mui-datatables";
import Avatar from '@material-ui/core/Avatar/Avatar';
import {Constants} from "../../utils/constants";

const columns = [
  {
    name: "id",
    options: {
      filter: false,
      sort: false,
      search: false,
      display: 'excluded'
    }
  },
  {
    name: "Аватар",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <Avatar src={value} style={{left: '50px'}}/>
      },
      customHeadRender: (value, tableMeta) => {
        return <th style={{borderBottom: "1px solid rgba(224, 224, 224, 1)"}} key={value}/>
      },
      search: false,
      download: false
    }
  },
  {
    name: "Наименование",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "Категория",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "Количество",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "Мярка",
    options: {
      filter: true,
      sort: true,
    }
  }
];

class ProductsTable extends React.Component {
  constructor(props) {
    super();
    this.rowClicked = this.rowClicked.bind(this);

    this.options = {
      filterType: 'checkbox',
      selectableRows: false,
      onRowClick: (rowData, rowMeta) => {
        this.props.openModal({
          variables: {
            name: Constants.ModalDialogs.UpdateProduct
          }
        });
        // const productId = rowData[0];
        // const product = this.props.products.find(x => x.id === productId);
        // this.rowClicked(product);
      }
    };
  }

  componentDidMount() {

  }

  render() {
    const data = this.props.products.map(product => {
      const cover = (product.cover !== null) ? product.cover.path : null;
      return [product.id, cover, product.title, product.category.title, product.stock, product.unit];
    });
    return (
      <div styleName="table">
        <MUIDataTable
          title={"Съставки"}
          data={data}
          columns={columns}
          options={this.options}
        />
      </div>
    );
  }

  rowClicked = (product) => {

  };
}

ProductsTable.propTypes = {};

export default CSSModules(ProductsTable, styles);