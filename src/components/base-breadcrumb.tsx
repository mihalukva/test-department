import React from "react";
import "./base.-breadcrumb.scss";
interface IBreadCrumb{
  path:Array <{link:string,name:string}>
}

export default class BreadCrumb extends React.Component<IBreadCrumb> {
  constructor(props: IBreadCrumb) {
    super(props);
  }
  render() {
    const list = this.props.path.map((item: any, index: number, array: any) => (
      <li
        className={
          index < array.length - 1 ? "nav-breadcrumb__item" : "nav-breadcrumb__item_active"
        }
        key={index.toString()}
      >
        <a href={index < array.length - 1 ? item.link : null}>{item.name}</a>
      </li>
    ));
    return (
      <nav aria-label="breadcrumb">
        <ol className="nav-breadcrumb">{list}</ol>
      </nav>
    );
  }
}
