var React = require('react');
var now = new Date();
var Calendar = React.createClass({
  currentYear: now.getFullYear(),
  currentMonth: now.getMonth() + 1,
  currentDate: now.getDate(),
  getInitialState: function() {
    return {month: this.currentMonth, date: this.currentDate}
  },
  changeMonth: function(month) {
    // this.setState({month: month, date:})
    this.setState({month: month, date: month === this.currentMonth ? this.currentDate : 1});
  },
  changeDate: function(date) {
    this.setState({date: date});
  },
  render: function() {
    return (
      <div>
        <Calendar.week />
        <Calendar.date year={this.currentYear} month={this.state.month} date={this.state.date} currentDate={this.currentDate} />
        <Calendar.month month={this.state.month} currentMonth={this.currentMonth} changeMonth={this.changeMonth} />
      </div>
    );
  }
});

Calendar.week = React.createClass({
  render: function() {
    return (
      <div className="flex week">
        <div>周一</div>
        <div>周二</div>
        <div>周三</div>
        <div>周四</div>
        <div>周五</div>
        <div>周六</div>
        <div>周日</div>
      </div>
    );
  }
});

Calendar.date = React.createClass({
  getDatesArray: function() {
    var dates = new Date(this.props.year, this.props.month, 0).getDate();
    var day = new Date(this.props.year, this.props.month - 1, 1).getDay();
    var tmp = [];
    var arr = ['', '', '', '', '', ''].slice(0, [6, 0, 1, 2, 3, 4, 5][day]).concat(buildDates(this.props.year, this.props.month, dates, this.props.currentDate));
    while(arr.length > 7) {
      tmp.push(arr.slice(0, 7));
      arr = arr.slice(7);
    }
    return (tmp.push(arr), tmp);

    function buildDates(year, month, dates, currentDate) {
      var a = [];
      var i = 1;
      for (i = 1;i <= dates;i++) {
        a.push({
          date: i,
          time: new Date(year, month - 1, i)
        });
      }
      return a;
    }
  },
  render: function() {
    var datesArray = this.getDatesArray();
    var datesNode = datesArray.map(function(w, i) {
      var ds =  w.map(function(d, j) {
        return (
          <div key={j} time={d.time}>{d.date}</div>
        );
      });
      return (
        <div key={i} className="flex date">{ds}</div>
      );
    });
    return (
      <div>{datesNode}</div>
    );
  }
});

Calendar.month = React.createClass({
  setMonth: function(month) {
    // console.log(month);
    this.props.changeMonth(month);
  },
  render: function() {
    return this.props.month === this.props.currentMonth ? (
      <div className="flex month" onClick={this.setMonth.bind(this, this.props.month - 1)}>
        <div>{this.props.month - 1}</div>
        <div>{this.props.month}</div>
        <div></div>
      </div>
    ) : (
      <div className="flex month" onClick={this.setMonth.bind(this, this.props.month + 1)}>
        <div></div>
        <div>{this.props.month}</div>
        <div>{this.props.month + 1}</div>
      </div>
    );
  }
});

/**
 * 生成长度为n, 值都为s的数组
 * @param  {number}
 * @param  {string}
 * @return {array}
 */
function nArrS(n, s) {
  return Array.apply(null, {length: n}).map(function() {
    return s;
  });
}
module.exports = Calendar;