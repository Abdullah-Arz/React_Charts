import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Badge from 'react-bootstrap/Badge';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import '../sass/Timeline_Points_Comp.scss';

function Timeline_Points_Comp() {
  return (
    <div className='tlpc-div'>
    
    <Timeline
    sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}
    className="timeLine_style"
  >
    
    <TimelineItem>

      <TimelineSeparator>

        <TimelineDot variant="outlined" color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>All Hands Meeting</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Yet another one, at <span className="text-warning fs-6">15:00 PM</span></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-info'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Build the production release <Badge bg="danger"> New </Badge></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-warning'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Something not important</TimelineContent>
    </TimelineItem>
    <TimelineItem>

      <TimelineSeparator>
      <TimelineConnector className='line_left' />

      </TimelineSeparator>
      <AvatarGroup max={8} style={{marginLeft:'26px'}}>
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" />
      <Avatar alt="Agnes Walker" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/3.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/5.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/6.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/7.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" />
    </AvatarGroup>
    </TimelineItem>
  </Timeline>

  <Timeline
    sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}
    className="timeLine_style"
  >
    
    <TimelineItem>

      <TimelineSeparator>

        <TimelineDot variant="outlined" color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>All Hands Meeting</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Yet another one, at <span className="text-warning fs-6">15:00 PM</span></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-info'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Build the production release <Badge bg="danger"> New </Badge></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-warning'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Something not important</TimelineContent>
    </TimelineItem>
    <TimelineItem>

      <TimelineSeparator>
      <TimelineConnector className='line_left' />

      </TimelineSeparator>
      <AvatarGroup max={8} style={{marginLeft:'26px'}}>
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" />
      <Avatar alt="Agnes Walker" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/3.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/5.jpg" />
      {/* <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/6.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/7.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" /> */}
    </AvatarGroup>
    </TimelineItem>
  </Timeline>

  <Timeline
    sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}
    className="timeLine_style"
  >
    
    <TimelineItem>

      <TimelineSeparator>

        <TimelineDot variant="outlined" color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>All Hands Meeting</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Yet another one, at <span className="text-warning fs-6">15:00 PM</span></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-info'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Build the production release <Badge bg="danger"> New </Badge></TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className='border-warning'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>Something not important</TimelineContent>
    </TimelineItem>
    <TimelineItem>

      <TimelineSeparator>
      <TimelineConnector className='line_left' />

      </TimelineSeparator>
      <AvatarGroup max={8} style={{marginLeft:'26px'}}>
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" />
      <Avatar alt="Agnes Walker" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Remy Sharp" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/1.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/3.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/4.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/5.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/6.jpg" />
      <Avatar alt="Travis Howard" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/7.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/8.jpg" />
      <Avatar alt="Trevor Henderson" src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/9.jpg" />
    </AvatarGroup>
    </TimelineItem>
  </Timeline>
  </div>
  )
}

export default Timeline_Points_Comp