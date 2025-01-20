import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function TaskManagement() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Responsiveness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         This Task Management App ensures that the multiple
            categories feature is implemented with a responsive design. The
            layout adjusts seamlessly across various devices and screen sizes,
            including desktops, laptops, tablets, and mobile devices. This
            responsiveness provides a consistent and user-friendly experience,
            regardless of the platform used to access the app.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListItem>
            
             User Authentication: Secure login using JWT for private routes.
            </ListItem>
            <ListItem>
             Create, update, and delete tasks
           
            </ListItem>
          
          
           <ListItem>
            Filter tasks by priority and completion status
           </ListItem>
           <ListItem>
            Sort tasks by start and end time.
           </ListItem>
           <ListItem>
            Dashboard Statistics: Total task count. Percentage of completed and pending tasks. Time lapsed and balance estimated time for pending tasks grouped by priority. Average time for task completion
           </ListItem>
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Technical Stack</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Framework: React with TypeScript Styling: Tailwind CSS <br/>Backend:

Server: Node.js with Express Database: MongoDB
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
