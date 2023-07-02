import { classNames } from 'shared/utils/classNames';
import cls from './CodeBlock.module.scss';
import { Button } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeBlockProps {
    text: string;
    className?: string;
}

export const CodeBlock = ({ text, className }: CodeBlockProps) => {
    const onCopyButtonClick = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.codeBlock, {}, [className])}>
            <Button className={cls.copyButton} onClick={onCopyButtonClick}>
                <CopyIcon className={cls.copyIcon} />
            </Button>

            <code className={cls.code}>{text}</code>
        </pre>
    );
};
