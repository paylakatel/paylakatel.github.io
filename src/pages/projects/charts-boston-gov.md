---
title: "Charts on boston.gov"
myRole: "Developer and Product Manager"
order: 5
thumbnail: "./images/charts.jpg"
path: "/projects/charts-boston-gov"
---

## Project Overview 
For the announcement of [yearly budget](https://www.boston.gov/finance/fiscal-year-2020), we wanted to integrated the information and numbers about the City's budget into boston.gov.

Each year, the [budget department](https://www.boston.gov/departments/budget) write the [Budget Book](https://www.boston.gov/sites/default/files/embed/file/2019-09/1a-volume_1_-_executive_summary.pdf). Before FY2020, our team's role was to take the Budget Book and use its text to automatically build a 1600 page static site. The site was hard to navigate and separate from boston.gov so couldn't leverage the linking and search indexing we have on our main domain. 

I worked with the Budget Department bring down the reading level their content - inline with our [site writing guidlines](https://www.boston.gov/departments/digital-team/city-boston-writing-guide), reduce the number of created pages for the Budget website from 1600 to 27, and build out [interactive charting component](https://www.boston.gov/departments/budget/fy20-operating-budget#revenue) for use throughout boston.gov. 

## Tech
The charts component on boston.gov is implemented similarly to our [maps component](/projects/maps-boston-gov/), as a web-component we drop on a boston.gov page when needed. 

The charts leverage the [Vega](https://vega.github.io/vega/) and [VegaLite](https://vega.github.io/vega-lite/) libaries for rendering. Users supply valid Vega/VegaLite json to the components config prop, and we then maniuplate the passed spec and rendered chart a little bit to fit our needs on boston.gov. 

The [code for the charts](https://github.com/CityOfBoston/patterns/blob/develop/web-components/chart/chart.tsx) is on github.

---
<div class="imageBlock">
    <div>
        <img src="./images/charts-on-boston-gov-screenshot.png" class="image" alt="Charts on Boston.gov"/>
    </div>
</div>