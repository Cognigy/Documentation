import time


def benchmark(func):
    """ Decorator for benchmarking performance of a function. """
    
    def exec_time(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        
        execution_time = end - start
        # TODO: expose the date via performance check and/or log the results to a database collection.
        #  Maybe supply the data as health metrics as well.
        if execution_time < 0.001:
            print(f"{func.__name__} took {execution_time*1000} milliseconds to complete")
        else:
            print(f"{func.__name__} took {execution_time} seconds to complete")
            
        return result
    
    return exec_time
