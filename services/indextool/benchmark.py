import time

from mongoengine import Document, StringField, FloatField, DateTimeField, OperationError


class PerformanceLog(Document):
    """ Schema for performance logs. """
    
    function_name = StringField()
    execution_time = FloatField()
    timestamp = DateTimeField()


def benchmark(func):
    """ Decorator for benchmarking performance of a function. """
    
    def exec_time(*args, **kwargs):
        try:
            start = time.time()
            result = func(*args, **kwargs)
            end = time.time()
            
            execution_time = end - start
            
            # saving the result in the database:
            # PerformanceLog(
            #     function_name=func.__name__,
            #     execution_time=execution_time,
            #     timestamp=datetime.date.today()
            # ).save()
            
            # TODO: Maybe supply the data as health metrics as well.
            #  Preparations for storing the performance values in a database collection is made
            #  but not fully implemented yet. Missing steps: define a globally available default connection to mongodb
            #  using mongoengine and keep it thread safe.
            if execution_time < 0.001:
                print(f"{func.__name__} took {execution_time * 1000} milliseconds to complete")
            else:
                print(f"{func.__name__} took {execution_time} seconds to complete")
            
            return result
        
        except (ConnectionError, OperationError) as e:
            print(f"Error: {e}")
    
    return exec_time
