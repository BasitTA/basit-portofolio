import React from "react";

export default function FooterItems(props){
   const title = props.title;
   const item = props.item;

   const detail = item.map((arr)=>(
      <React.Fragment key={ Math.random() } >
         <a href='#' className="card-text link-light link-underline link-underline-opacity-0"><small><i className={ arr.icon }></i> { arr.detail }</small></a>
         <br />
      </React.Fragment>
   ));

   return(
      <div className={`col mt-3 text-center py-2`}>
         <h4 className="card-title text-white mb-3">{ title }</h4>
         <div className={ `card-body` }>
            { detail }
         </div>
      </div>
   );
}