"""Adjacent Elements Product"""

def solution(input_array):
    """
    Calculates the maximum product of adjacent elements in the input array.

    Args:
    input_array: a list of integers representing the input array.

    Returns:
    The maximum product of adjacent elements in the input array.
    """
    if len(input_array) >= 2:
        max_product = input_array[0] * input_array[1]
        for i in range(1, len(input_array) - 1):
            product = input_array[i] * input_array[i+1]
            if product > max_product:
                max_product = product

        return max_product
    return None
