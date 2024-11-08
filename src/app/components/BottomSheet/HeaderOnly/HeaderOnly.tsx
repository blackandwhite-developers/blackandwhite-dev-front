import React, { ReactNode } from "react";
import styles from "./HeaderOnly.module.scss";
import cn from "classnames";

type HeaderOnlyBottomSheetProps = {
    title: string;
    content?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
};

const HeaderOnly = ({
    title,
    content,
    isOpen,
    onClose,
    className,
}: HeaderOnlyBottomSheetProps) => {
    if (!isOpen) return null;
    return (
        <>
            {isOpen && (
                <div
                    className={cn(styles.overlay, { [styles.open]: isOpen })}
                    onClick={onClose}
                >
                    <div
                        className={cn(styles.bottomSheet, className, { [styles.open]: isOpen })}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.handle} />
                        <h1 className={styles.title}>{title}</h1>
                        {content && (
                            <div
                                className={styles.content}
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderOnly;
