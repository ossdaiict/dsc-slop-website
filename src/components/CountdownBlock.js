import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function CountdownBlock(props) {
  return (
    <Card className="w-40 xs:w-24 mx-2" elevation="5">
      <CardContent className="text-center">
        <Typography className="text-white text-2xl xs:text-xs font-sans">
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}
