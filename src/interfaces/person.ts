interface Person {
	document: Document;
	targetIds: number[];
}

interface Document {
	name: string;
	fields: Fields;
	createTime: string;
	updateTime: string;
}

interface Fields {
	avatarUrl: StringValue;
	email: StringValue;
	progressStatus: StringValue;
	hasUserProfile: BooleanValue;
	group: StringValue;
	role: StringValue;
	university: StringValue;
	userId: StringValue;
	name: StringValue;
	city: StringValue;
	studyProgram: StringValue;
}

interface StringValue {
	stringValue: string;
}

interface BooleanValue {
	booleanValue: boolean;
}

export default Person;
