import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';


const socialItems = [
    { icon: GitHubIcon, url: "" },
    { icon: TwitterIcon, url: "" },
    { icon: LinkedInIcon, url: "" }
];


export default function Social({ direction }) {
    return (
        <Grid container direction={direction || "row"} spacing={1}>
            {socialItems.map((item, index) => (
                <Grid item key={index}>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon />
                        </IconButton>
                    </Link>
                </Grid>
            )
            )
            }
        </Grid>
    )
}
