import React, { Component } from 'react'
import moment from 'moment';
import 'moment/locale/ru';
import DateTime from './DateTime';

function pretty(Component) {
  return class extends Component {
    render() {
      const newDate = moment(this.props.date).locale('ru').fromNow();
      return (
        <Component date={newDate} />
      )
    }
  }
}

const DateTimePretty = pretty(DateTime);

export default DateTimePretty;