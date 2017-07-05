export class BasicFormatter {
    format(severity: any, message: string, extraData?: any): string {
        return `${severity.label} ${message}`;
    }
};

export default BasicFormatter;
