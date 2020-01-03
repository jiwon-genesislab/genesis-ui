import React from 'react';
import { withStyles } from '@material-ui/styles';

import Calendar from './calendar';
import Header from './Header';
import Body from './Body';

const useCalendarStyles = theme => ({
  container: {
    boxSizing: 'border-box',
    position: 'absolute',
    paddingLeft: 6,
    paddingRight: 6,
    width: 320,
    // height: 346,
    borderRadius: 8,
    boxShadow: '0 16px 16px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#f9f9f9'
  }
});

function createWeekLabel() {
  const mon = { id: 'mon', label: '월' };
  const tue = { id: 'tue', label: '화' };
  const wen = { id: 'wen', label: '수' };
  const thr = { id: 'thr', label: '목' };
  const fri = { id: 'fri', label: '금' };
  const sat = { id: 'sat', label: '토' };
  const sun = { id: 'sun', label: '일' };

  return [mon, tue, wen, thr, fri, sat, sun];
};


class CalendarComponent extends React.Component {
  constructor (props) {
    super(props);

    const instance = new Calendar(
      {
      //   // locale: 'enUS',
        // date: new Date(2019, 6)
      }
    );
    this.state = {
      date: instance.date,
      selectedDate: null,
      dateToTitle: instance.getDateTitle(),
      dayList: instance.getDayList(),
      weeksLabel: createWeekLabel()
    };

    this.instance = instance;
    this.prev = this.prev.bind(this);
    this.setSelectDate = this.setSelectDate.bind(this);
    this.forward = this.forward.bind(this);
  };

  prev() {
    const date = this.instance.prev();
    this.setState({
      ...this.state,
      date,
      dateToTitle: this.instance.getDateTitle(),
      dayList: this.instance.getDayList(),
    });
  }

  forward() {
    const date = this.instance.forward();
    this.setState({
      ...this.state,
      date,
      dateToTitle: this.instance.getDateTitle(),
      dayList: this.instance.getDayList(),
    });
  }

  setSelectDate(item) {
    return event => {
      if (item.isThisMonth) {
        this.setState({
          ...this.state,
          selectedDate: item.date
        });
      }
    }
  }
  
  render () {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.container}>
        <Header title={this.state.dateToTitle} prev={this.prev} forward={this.forward} />
        <Body
          selectedDate={this.state.selectedDate}
          weeksLabel={this.state.weeksLabel}
          dayList={this.state.dayList}
          setSelectDate={this.setSelectDate}
        />
      </div>
    );
  }
};

export default withStyles(useCalendarStyles)(CalendarComponent);