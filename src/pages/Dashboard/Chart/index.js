import * as d3 from 'd3';

const sample = [
  {
    weekName: '1-6',
    value: 55,
    value2: 25,
    value3: 15,
  },
  {
    weekName: '7-13',
    value: 35,
    value2: 15,
    value3: 25,
  },
  {
    weekName: '14-20',
    value: 25,
    value2: 5,
    value3: 15,
  },
  {
    weekName: '21-27',
    value: 42,
    value2: 9,
    value3: 25,
  },
  {
    weekName: '28',
    value: 2,
    value2: 3,
    value3: 5,
  },
];


export const initGraph = (width, height, margin) => {

    const svg = d3.select('svg');

    width = width - 2 * margin;
    height = height - 3 * margin;

    const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin+40})`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(sample.map((s) => s.weekName))
      .padding(0.4)
    
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 60]);

    const makeYLines = () => d3.axisLeft()
      .scale(yScale)

    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .call(d3.axisLeft(yScale));

    chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
      )

    const barGroups2 = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups2
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', (g) => xScale(g.weekName)+31)
      .attr('y', (g) => yScale(g.value2))
      .attr('height', (g) => height - yScale(g.value2))
      .attr('width', xScale.bandwidth()/3)
      .on('mouseenter', function (actual, i) {

      svg.append('text')
        .attr('class', 'value-hover')
        .attr('x', width/2)
        .attr('y', 140)
        .attr('text-anchor', 'middle')
        // .text((a) => `${a.value}`)
        // opacity all bars
        // d3.selectAll('.value')
        //   .attr('opacity', 0)
        
        // opacity this bar  
        d3.select(this)
          .attr('opacity', 0.6)
        //   .transition()
        //   .duration(300)
        //   .attr('x', (a) => xScale(a.weekName) - 5)
        //   .attr('width', xScale.bandwidth() + 10)
        
        // text inside bar  
        barGroups2.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => (xScale(a.weekName) + (xScale.bandwidth()/3) / 2)+31)
          .attr('y', (a) => yScale(a.value2)-5)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a) => `${a.value2}`)
      })
      .on('mouseleave', function () {
        // d3.selectAll('.value')
        //   .attr('opacity', 1)

        d3.select(this)
          .attr('opacity', 1)
        //   .transition()
        //   .duration(300)
        //   .attr('x', (a) => xScale(a.weekName))
        //   .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })

    const barGroups3 = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups3
      .append('rect')
      .attr('class', 'bar3')
      .attr('x', (g) => xScale(g.weekName)+64)
      .attr('y', (g) => yScale(g.value3))
      .attr('height', (g) => height - yScale(g.value3))
      .attr('width', xScale.bandwidth()/3)
      .on('mouseenter', function (actual, i) {

        // opacity all bars
        // d3.selectAll('.value')
        //   .attr('opacity', 0)
        
        // opacity this bar  
        d3.select(this)
          .attr('opacity', 0.6)
        //   .transition()
        //   .duration(300)

        //   .attr('x', (a) => xScale(a.weekName) - 5)
        //   .attr('width', xScale.bandwidth() + 10)
        
        // text inside bar  
        barGroups3.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.weekName)+78)
          .attr('y', (a) => yScale(a.value3)-5)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a) => `${a.value3}`)
      })
      .on('mouseleave', function () {
        // d3.selectAll('.value')
        //   .attr('opacity', 1)

        d3.select(this)
          .attr('opacity', 1)
        //   .transition()
        //   .duration(300)
        //   .attr('x', (a) => xScale(a.weekName))
        //   .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })


    const barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.weekName))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth()/3)
      .on('mouseenter', function (actual, i) {

        // opacity all bars
        // d3.selectAll('.value')
        //   .attr('opacity', 0)
        
        // opacity this bar  
        d3.select(this)
          .attr('opacity', 0.6)
        //   .transition()
        //   .duration(300)

        //   .attr('x', (a) => xScale(a.weekName) - 5)
        //   .attr('width', xScale.bandwidth() + 10)
        
        // text inside bar  
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.weekName) + (xScale.bandwidth()/3) / 2)
          .attr('y', (a) => yScale(a.value)-5)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a) => `${a.value}`)
      })
      .on('mouseleave', function () {
        // d3.selectAll('.value')
        //   .attr('opacity', 1)

        d3.select(this)
          .attr('opacity', 1)
        //   .transition()
        //   .duration(300)
        //   .attr('x', (a) => xScale(a.weekName))
        //   .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })

    svg.append('text')
      .attr('class', 'checkin')
      .attr('x', width - margin*4)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
        .text('Check In: 23,441')

    svg.append('text')
      .attr('class', 'checkout')
      .attr('x', width - margin/3)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Check Out: 20,441')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', 120)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Reservation Stats ')

}
