import React, { useState } from 'react'
import portfolioList from '../elements/PortfolioList'
import CategoryTab from './subcomponents/CategoryTab';
import PortfolioItems from './subcomponents/PortfolioItems';
import SectionTitle from './subcomponents/SectionTitle';

const Portfolio = () => {
  const [data, setData] = useState(portfolioList);

  const [classCat, setClassCat] = useState('all');

  const categoryData = portfolioList.map((value) => {
    return value.category
  });

  const tabsCategory = ["all", ...new Set(categoryData)];

  const filterCategory = (category) => {
    setClassCat(category);
    if (category === "all") {
      setData(portfolioList);
      return;
    }
    const filteredPortfolio = portfolioList.filter((value) => {
      return value.category === category;
    })
    setData(filteredPortfolio);
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">

        <SectionTitle title='Portfolio' subtitle='Sit sint consectetur velit quisquam cupiditate impedit suscipit' />

        <CategoryTab filterCategory={filterCategory} tabsData={tabsCategory} class={classCat} />
        
        <PortfolioItems portfolioItems={data} />

      </div>
    </section>
  )
}

export default Portfolio