export interface EntityReference {
	entityId: string,
	name: string,
}

export enum C_status {
	QUARANTINED = "Quarantined",
	REMOVED = "Removed",
	LIVE = "Live",
}

export default interface Ce_testimonial {
	name: string,
	c_additionalDisclosures?: string,
	c_author?: string,
	c_authorEmail?: string,
	c_clientRelationshipDisclosure?: string,
	c_compensationDetails?: string,
	c_compensationDisclosure?: string,
	c_conflictDetails?: string,
	c_content?: string,
	c_currentClient?: string,
	c_datePosted?: string,
	c_flagStatus?: string,
	c_invitationID?: string,
	c_location?: EntityReference[],
	c_rating?: number,
	c_response?: string,
	c_reviewDate?: string,
	c_labels?: string[],
	c_status?: C_status,
	c_testimonialCollectionPage?: string,
	id: string,
}
