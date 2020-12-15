let cron = require('node-schedule')


cron.scheduleJob({ hour: 5, minute: 58, dayOfWeek: 1 }, () => {
    console.log('report generating');
    var beforeOneWeek = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)
        , day = beforeOneWeek.getDay()
        , diffToMonday = beforeOneWeek.getDate() - day + (day === 0 ? -6 : 1)
    //, lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
    for (i = 0; i <= 4; i++) {
        date = new Date(beforeOneWeek.setDate(diffToMonday + i));
        let url = "http://doodle360.in/CronReportsDailyEod/dailyFridayTeamEod?date=" + date.split('T')[0];
        axios.get(url);
    }
});

cron.scheduleJob({ hour: 20, minute: 58 }, () => {
    //, lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
    let day = new Date().getDay();
    if (day > 0 && day < 6) {
        let url = "https://doodle360.in/CronReports/eodReminderMail";
        axios.get(url);
    }
});

cron.scheduleJob({ hour: 09, minute: 58 }, () => {
    //, lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
    let day = new Date().getDay();
    if (day > 0 && day < 6) {
        let url = "https://doodle360.in/CronReports/eodApproveReminderMail";
        axios.get(url);
    }
});

