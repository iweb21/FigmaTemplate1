import React from 'react';
import Colorfilter from '../components/filter/colorfilter';
//import Colorbar from '../components/filter/colorbar';


const Filters = () => {
  return (
    <div className="md:px-[100px] grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] gap-4">
      {/* <Colorbar /> */}
      <Colorfilter />
    </div>
  );
};

export default Filters;
