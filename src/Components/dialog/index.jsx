import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
    root: {
        background: "linear-gradient(-45deg, #232526, #414345)",
    },
}));

function MyDialog(props) {
    const { open, handleClose, scroll, descriptionElementRef, movie } = props;
    const classes = useStyle();

    return (
        <>
            <div>
                <Dialog
                    className={classes.root}
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">
                        {movie.name}
                    </DialogTitle>
                    <DialogContent dividers={scroll === "paper"}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {movie.review !== ""
                                ? movie.review
                                : "Sorry, No Review to show :("}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            className="dialog-close-btn"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default MyDialog;
