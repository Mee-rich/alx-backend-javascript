// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // Only modifiable during initialization
  readonly lastName: string;         // Only modifiable during initialization
  fullTimeEmployee: boolean;         // Always defined
  yearsOfExperience?: number;        // Optional
  location: string;                  // Always defined
  [key: string]: any;                // Allows adding any other properties like 'contract'
}
