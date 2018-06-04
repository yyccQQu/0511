import React from 'react';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

const _mm = new MUtil();
const _product = new Product();


class CategoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      parentCategoryId: this.props.match.params.categoryId || 0,
      categoryName: ''
        
    };
  }

  componentDidMount() {
    this.loadCategoryList();
  }

  //加载品类列表,显示父品类列表
  loadCategoryList() {
    _product.getCategoryList().then(res => {
      this.setState({
        categoryList:res
      });
    }, errMsg=>{
      _mm.errorTips(errMsg);
    })
  }

  onSubmit(e) {
    let categoryName = this.state.categoryName.trim();
    if(!this.state.categoryName) {
      _product.saveCategory({
        parentId : this.state.parentId,
        categoryName: categoryName
      }).then((res)=>{
        _mm.successTips(res)
      })
    }
  }

  render() {
    return <div id="page-wrapper">
        <PageTitle title="品类列表" />
        <div className="row">
          <div className="col-md-12">
            <div className="form-horizontal">
              <div className="form-group">
                <label className="col-md-2 control-label">所属品类</label>
                <div className="col-md-5">
                  <select name="parentId" className="form-control" onChange={e => this.onValueChange(e)}>
                    <option value="0">根品类/</option>
                    {this.state.categoryList.map((category, index) => {
                      return <option value={category.id} key={index}>
                          {category.name}
                        </option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">品类名称</label>
                <div className="col-md-5">
                  <input type="text" className="form-control" placeholder="请输入品类名称" name="categoryName" value={this.state.name} onChange={e => this.onValueChange(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }


}

export default CategoryAdd;