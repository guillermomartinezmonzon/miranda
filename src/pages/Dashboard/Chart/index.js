import * as d3 from 'd3';

const sample = [
  {
    dayOfWeek: 'Sunday',
    value: 80,
  },
  {
    dayOfWeek: 'Monday',
    value: 65,
  },
  {
    dayOfWeek: 'Tuesday',
    value: 65,
  },
  {
    dayOfWeek: 'Wednesday',
    value: 61,
  },
  {
    dayOfWeek: 'Thursday',
    value: 60,
  },
  {
    dayOfWeek: 'Friday',
    value: 59,
  },
  {
    dayOfWeek: 'Saturday',
    value: 59,
  }
];


export const initGraph = (width, height, margin) => {

    const svg = d3.select('svg');

    width = width - 2 * margin;
    height = height - 2 * margin;

    const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin})`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(sample.map((s) => s.dayOfWeek))
      .padding(0.4)
    
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 100]);

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

    const barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.dayOfWeek))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
      .on('mouseenter', function (actual, i) {

        d3.selectAll('.value')
          .attr('opacity', 0)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.dayOfWeek) - 5)
          .attr('width', xScale.bandwidth() + 10)

        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.dayOfWeek) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a) => `${a.value}`)
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.dayOfWeek))
          .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Total Check In ')

    svg.append('text')
      .attr('class', 'source')
      .attr('x', width - margin / 2)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'start')
      .text('26/12 - 01/12')
}
