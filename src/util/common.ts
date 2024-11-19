  /**
   * @description this is get nights
   * @param check_in
   * @param check_out
   * @returns number
   */
  export const getDatesFromCheckInCheckOut = (check_in: Date, check_out: Date) => {
    // Calculate the difference in time
    const timeDifference = check_out.getTime() - check_in.getTime();

    // Convert time difference from milliseconds to days
    const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in one day
    const daysDifference = Math.ceil(timeDifference / oneDay); // Use Math.ceil to include the last day

    return daysDifference;
  }