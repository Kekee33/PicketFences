// import React from "react";
// import ReactDOM from "react-dom";
// import "./Calendar.css";

// class Calendar extends Component {
//     propTypes: {
//       initialYear: React.PropTypes.number.isRequired,
//       initialMonth: React.PropTypes.number.isRequired,
//       initialCalendarView: React.PropTypes.array.isRequired
//     }
    
//     getInitialState: function() {
//       return {
//         year: this.props.initialYear,
//         month: this.props.initialMonth,
//         events: [],
//         selectedDate: "",
//         calendarView: this.getDaysInMonth(this.props.initialYear, this.props.initialMonth)
//       }
//     },
    
//     setSelectedDate: function(date) {
//       date = date.toString();
      
//       this.setState({selectedDate: date});
      
//       console.log(this.state.selectedDate);
//     },
    
//     changeMonth: function(delta) {
//       let currentMonth = this.state.month;
//       let currentYear = this.state.year;
      
//       // if the current month is Dec and delta is 1, increase the year by 1 and change the current month to Jan
//       if(currentMonth == 11 && delta == 1) {
//         this.setState({
//           year: this.state.year + 1,
//           month: 0,
//           calendarView: this.getDaysInMonth(this.state.year, this.state.month)
//         });
//       } 
//       // Else if the current month is January and the delta is -1, decrement the year by 1 and change the current month to December
//       else if (currentMonth == 0 && delta == -1) {
//         this.setState({
//           year: this.state.year - 1,
//           month: 11,
//           calendarView: this.getDaysInMonth(this.state.year, this.state.month)
//         });
//       }
//       else {
//         console.log("Before: ", delta, this.state.year, this.state.month);
//         this.setState({
//           year: this.state.year,
//           month: this.state.month + delta,
//           calendarView: this.getDaysInMonth(this.state.year, this.state.month)
//         });
//         console.log(this.state.calendarView);
//         console.log(delta, this.state.year, this.state.month);
//       }
//     },
    
//     getDaysInMonth: function(year, month) {
//       let daysInMonth = [],
//           dayCounter = 1,
//           complete = false;
    
//       // Starting from {dayCounter} and continuing until the month changes...
//       while (complete == false) {
//         let date = new Date();
//         date.setMonth(month);
//         date.setFullYear(year);
//         date.setDate(dayCounter);
  
//         let nextDate = new Date();
//         nextDate.setMonth(month);
//         nextDate.setFullYear(year);
//         nextDate.setDate(dayCounter + 1);
  
//         daysInMonth.push(date);
//         dayCounter += 1;
  
//         // Finished adding dates if the current date iterative's month does not match the upcoming iterative's month
//         // date.getMonth() == nextDate.getMonth ? complete = false : complete = true;
  
//         if (date.getMonth() != nextDate.getMonth()) {
//           complete = true;
//         }
//       }
//       return daysInMonth;
//     },
    
//     addEvent: function() {
//       alert();
//     },
    
//     render: function() {
//       return (
//         <div className="container">
//           <div className="row">
//             <Calendar calendarView={this.state.calendarView} year={this.state.year} month={this.state.month} changeMonth={this.changeMonth} setSelectedDate={this.setSelectedDate} />
//             <Events addEvent={this.addEvent}/>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   function Calendar(props) {
//     return (
//       <div className="col-lg-6 calendar">
//         <h1>My Calendar</h1>
//         <table>
//           <tr className="calendar--row calendar--weekdays">
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thur</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//           {
//             (function() {
//               let calendarWeeks = [];
//               let weekCounter = 0;
  
//               // Map function stores arrays of "weeks" based on the month and year selected.
//               // Used later to populate dates.
//               props.calendarView.map(function(date) {
//                 if (calendarWeeks.length == 0) {
//                   // Add a weekArray to the calendarWeeks array
//                   calendarWeeks.push(new Array);
//                   // Increment weekCounter
//                   weekCounter += 1;
//                   // Add date to array
//                   calendarWeeks[weekCounter-1].push(date);
//                 }
//                 // Else If calendarWeeks.length != 0 AND if the first day is Sunday
//                 else if (calendarWeeks.length != 0 && date.getDay() == 0) {
//                   // Add a weekArray to the calendarWeeks array
//                   calendarWeeks.push(new Array);
//                   // Increment weekCounter
//                   weekCounter += 1;
//                   // Add date to array
//                   calendarWeeks[weekCounter-1].push(date);
//                 }
//                 // Else add the date to the current week array
//                 else {
//                   calendarWeeks[weekCounter-1].push(date);
//                 }
//               });
  
//               return calendarWeeks.map(function(weekDates) {
//                 return <Week weekDates={weekDates} setSelectedDate={props.setSelectedDate} />
//               })
//             }())
//           }
//         </table>
//         <div className="calendar--tools">
//           <button onClick={function() {props.changeMonth(-1)}}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
//           <span> <Month month={props.month}/> <Year year={props.year} /> </span>
//           <button onClick={function() {props.changeMonth(1)}}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
//         </div>
//       </div>
//     );
//   }
  
//   Calendar.propTypes = {
//     year: React.PropTypes.number.isRequired,
//     month: React.PropTypes.number.isRequired,
//     calendarView: React.PropTypes.array.isRequired
//   }
  
//   // The Event component should take a day argument and return a list of events that have been stored for that day
//   // Day event information is stored in the Application state in an array of Event objects event{date, [events]}
//   function Events(props) {
//     return (
//       <div className="col-lg-6 event--viewer">
//         <h1>Events</h1>
//         <div className="event--viewer--item">
//           <i className="fa fa-calendar" aria-hidden="true"></i>
//           <p>This is an event item for the calendar</p>
//           <i className="fa fa-times" aria-hidden="true"></i>
//         </div>
//         <div className="event--viewer--item">
//           <i className="fa fa-calendar" aria-hidden="true"></i>
//           <p>This is an event item for the calendar</p>
//           <i className="fa fa-times" aria-hidden="true"></i>
//         </div>
//         <button>Add Event</button>
//       </div>
//     );
//   }
  
//   Events.propTypes = {}
  
//   function Year(props) {
//     return (
//       <span> {props.year} </span>
//     );
//   }
  
//   Year.propTypes = {
//     year: React.PropTypes.number.isRequired,
//   }
  
//   function Month(props) {
//     // Used to render the month at the bottom of the calendar
//     let monthList = new Array(12);
//     monthList[0] = "Jan";
//     monthList[1] = "Feb";
//     monthList[2] = "Mar";
//     monthList[3] = "Apr";
//     monthList[4] = "May";
//     monthList[5] = "Jun";
//     monthList[6] = "Jul";
//     monthList[7] = "Aug";
//     monthList[8] = "Sept";
//     monthList[9] = "Oct";
//     monthList[10] = "Nov";
//     monthList[11] = "Dec";
    
//     return (
//       <span>{monthList[props.month]}</span>
//     );
//   }
  
//   Month.propTypes = {
//     month: React.PropTypes.number.isRequired,
//   }
  
//   function Week(props) {
//     // Returns an array. Formatted array is used to pass in days in order that they would be passed to Day components.
//     function getFormattedWeek() {
//       let week = [];
      
//       for (let i=0; i<=6; i++) {
//         let date = props.weekDates.filter(function(day) {
//           return day.getDay() == i;
//         });
//         week.push(date[0]);
//       }
//       return week;
//     }
//     let week = getFormattedWeek();
    
//     return (
//       <tr className="calendar--row calendar--week">
//         {
//           week.map(function(currentDay, dayIndexNum) {
//             return <Day day={currentDay} setSelectedDate={props.setSelectedDate} />
//           })
//         }
//       </tr>
//     );
//   }
  
//   Week.propTypes = {
//     weekDates: React.PropTypes.array.isRequired
//   }
  
//   function Day(props) {
//     // For some reason, JS forgot that props.day is a Date object which caused method call problems. Re-establishing that here...
//     let date = new Date(props.day);
    
//     return (
//       <td onClick={function() {props.setSelectedDate(date)}}>{isNaN(date.getDate()) ? "" : date.getDate()}</td>
//     );
//   }
  
//   Day.propTypes = {
//     day: React.PropTypes.number.isRequired
//   }
  
//   ReactDOM.render(<Calendar initialYear={2017} initialMonth={6} />, document.getElementById("calendar"));